# JSON Form Generator

## Available Scripts

In the project directory, you can run:

- ### `npm start`

- ### `npm run build`

---

## Description

`It's just a test realisation of JSON form generator.`

Application allows you to create HTML form from JSON file. Write/paste JSON config in `textarea` on the left side of home page. Right side of home page shows you hints/warrnings/errors of your JSON config;
IF your JSON config is valid you could see generated form on the second tab - `RESULT`.

```javasciprt
    JSON FORMAT:
    {
        "form_items": [
            {
                "name": "name of input field",
                "label": "label of input field",
                "type": "type of input field"
            }
        ],
        "form_title": "Form name",
        "form_buttons": [{
            "title": "Apply"
        }]
    }
```

### Form params

| **Param**        | **Type** | Required |
| ---------------- | -------- | -------- |
| **form_items**   | _array_  | _yes_    |
| **form_title**   | _string_ | _yes_    |
| **form_buttons** | _array_  | _yes_    |

### Form item params

| **Param** | **Type** | Required |
| --------- | -------- | -------- |
| **name**  | _string_ | _yes_    |
| **label** | _string_ | _yes_    |
| **type**  | _string_ | _yes_    |

### Form button params

| **Param** | **Type** | Required |
| --------- | -------- | -------- |
| **title** | _string_ | _yes_    |
