from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import schemas, crud, database, auth
from app.auth import decode_token
from fastapi.security import OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


router = APIRouter(prefix="/todos", tags=["Todos"])

@router.get("/", response_model=list[schemas.TodoOut])
def read_todos(db: Session = Depends(database.get_db), current_user: schemas.UserOut = Depends(auth.get_current_user)):
    return crud.get_todos(db, user_id=current_user.id)

@router.post("/", response_model=schemas.TodoOut)
def create(todo: schemas.TodoCreate, token: str = Depends(oauth2_scheme), db: Session = Depends(database.get_db)):
    payload = decode_token(token)
    user_id = int(payload.get("sub"))
    if user_id is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    return crud.create_todo(db, todo, user_id)

@router.put("/{todo_id}", response_model=schemas.TodoOut)
def update(todo_id: int, todo: schemas.TodoUpdate, db: Session = Depends(database.get_db), current_user: schemas.UserOut = Depends(auth.get_current_user)):
    return crud.update_todo(db, todo_id, todo, user_id=current_user.id)

@router.delete("/{todo_id}")
def delete(todo_id: int, db: Session = Depends(database.get_db), current_user: schemas.UserOut = Depends(auth.get_current_user)):
    if not crud.delete_todo(db, todo_id, user_id=current_user.id):
        raise HTTPException(status_code=404, detail="Todo not found")
    return {"detail": "Deleted"}
