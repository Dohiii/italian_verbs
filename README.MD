#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- admin.js
- auth.js
- verbs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

## Usage

#### Filtering (verbs)

categories: ["regularny", "nieregularny"]

can filter by category, tense will choose what will be a returning object and what will be winning word.

```
/verbs?categoria=regularny&tense=PRESENTE&tense=PASSATO PROSSIMO
```

#### Pagination (admin)

```
/admin/verbs?page=1&limit=10
```

#### Search (admin)

```
/admin?search=excamplio
```

# italian_verbs_api
