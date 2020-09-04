# TO DO API

# API

## Get all the items

GET `/api/todos/`
Sample response body:

```
{
    "id": 1,
    "todo": "-------",
    "completed": " false
  },
  {
    "id": 2,
    "todo": "-------",
    "completed": " true
}
```

## Create a new item

POST `/api/todos`
Sample request body:

```
{
    "todo": "the name of the item added"
}
```

Once it does that, return the following response:

```
{
    "id": 3,
    "item": "the name of the item just added",
    "completed": false
}
```

## Delete an item

DELETE `/api/todo/:id`
Once it does that, it returns the item that was deleted:

```
{
    "id": 3,
    "item": "the name of the item just added",
    "completed": false
}
```

## Update and item (Completing a task)

PUT `/api/todo/:id`
Sample request body:

```
{
  "todo": "your to do",
  "complete": true,
}
```

Returns the updated item.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
