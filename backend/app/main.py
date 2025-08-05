from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from . import models, database, auth_routes, todo_routes
from .auth import oauth2_scheme

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(todo_routes.router)


@app.get("/protected-test")
def protected_test(token: str = Depends(oauth2_scheme)):
    return {"message": "Token is valid!"}