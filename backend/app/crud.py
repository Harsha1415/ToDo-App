from sqlalchemy.orm import Session
from . import models, schemas
from fastapi import HTTPException

def get_todos(db: Session, user_id: int):
    return db.query(models.Todo).filter(models.Todo.user_id == user_id).all()

def create_todo(db: Session, todo: schemas.TodoCreate, user_id: int):
    db_todo = models.Todo(**todo.dict(), user_id=user_id)
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo


def update_todo(db: Session, todo_id: int, todo: schemas.TodoUpdate, user_id: int):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id, models.Todo.user_id == user_id).first()
    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    for key, value in todo.dict().items():
        setattr(db_todo, key, value)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def delete_todo(db: Session, todo_id: int, user_id: int):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id, models.Todo.user_id == user_id).first()
    if not db_todo:
        return False
    db.delete(db_todo)
    db.commit()
    return True
