from pydantic import BaseModel

class TodoBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False

class TodoCreate(TodoBase):
    pass

class TodoUpdate(TodoBase):
    pass

class TodoOut(TodoBase):
    id: int
    class Config:
        orm_mode = True

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
