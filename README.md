Here's a comprehensive `README.md` file for your project:

# DeliDex API

DeliDex is a RESTful API built using Node.js, Express, and MongoDB. It provides endpoints for managing categories, subcategories, and items, which can be utilized for various applications such as e-commerce platforms. The API allows you to create, retrieve, update, and delete categories, subcategories, and items, with support for searching and calculating tax and discounts.

## Features
- **Categories**: Create, read, update, and delete categories.
- **Subcategories**: Manage subcategories linked to categories.
- **Items**: Create items, calculate discounts, manage tax applicability, and categorize them under subcategories.
- **Search Functionality**: Search items by name using regular expressions.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **MongoDB**: Install MongoDB. You can download it [here](https://www.mongodb.com/try/download/community).
- **Postman** (optional): Postman is useful for testing API endpoints. You can download it [here](https://www.postman.com/).

## Installation

### 1. Clone the repository

```
git clone https://github.com/chickenleaf/delidex.git
cd delidex
```

### 2. Install dependencies

```
npm install
```

### 3. Set up MongoDB

Ensure MongoDB is running on your system. By default, the app connects to a local MongoDB instance on `mongodb://localhost:27017/DeliDex`. You can change this URL in `app.js` if your MongoDB instance is running elsewhere.

### 4. Run the server

```
node app.js
```

The server should start on `http://localhost:3000`.

## API Endpoints

### Categories

#### Create a Category

- **Endpoint**: `POST /api/category`
- **Description**: Create a new category.
- **Request Body**:
  ```
  {
    "name": "Fruits",
    "image": "fruits.png",
    "description": "Fresh and healthy fruits",
    "taxApplicability": true,
    "tax": 5,
    "taxType": "percentage"
  }
  ```
- **Response**: Returns the created category.

#### Get All Categories

- **Endpoint**: `GET /api/category`
- **Description**: Get all categories.
- **Response**: Returns an array of all categories.

#### Get Category by ID

- **Endpoint**: `GET /api/category/:id`
- **Description**: Get a category by its ID.
- **Response**: Returns the requested category or `404` if not found.

#### Edit Category

- **Endpoint**: `PUT /api/category/:id`
- **Description**: Update an existing category by ID.
- **Request Body**: Same as Create a Category.
- **Response**: Returns the updated category.

### Subcategories

#### Create a Subcategory

- **Endpoint**: `POST /api/subcategory`
- **Description**: Create a new subcategory under a specific category.
- **Request Body**:
  ```
  {
    "name": "Citrus Fruits",
    "image": "citrus.png",
    "description": "Sour and juicy fruits",
    "category": "60e8a93bda7f4a3a3baba4e7" 
  }
  ```
- **Response**: Returns the created subcategory.

#### Get All Subcategories

- **Endpoint**: `GET /api/subcategory`
- **Description**: Get all subcategories.
- **Response**: Returns an array of all subcategories.

#### Get Subcategories by Category ID

- **Endpoint**: `GET /api/subcategory/category/:categoryId`
- **Description**: Get subcategories by their parent category ID.
- **Response**: Returns an array of subcategories linked to the specified category.

#### Edit Subcategory

- **Endpoint**: `PUT /api/subcategory/:id`
- **Description**: Update an existing subcategory by ID.
- **Request Body**: Same as Create a Subcategory.
- **Response**: Returns the updated subcategory.

### Items

#### Create an Item

- **Endpoint**: `POST /api/item`
- **Description**: Create a new item under a specific subcategory.
- **Request Body**:
  ```
  {
    "name": "Orange",
    "image": "orange.png",
    "description": "Sweet and juicy orange",
    "taxApplicability": true,
    "tax": 5,
    "baseAmount": 50,
    "discount": 5,
    "subCategory": "60e8a93bda7f4a3a3baba4e9",
    "category": "60e8a93bda7f4a3a3baba4e7"
  }
  ```
- **Response**: Returns the created item with the calculated `totalAmount`.

#### Get All Items

- **Endpoint**: `GET /api/item`
- **Description**: Get all items.
- **Response**: Returns an array of all items.

#### Get Items by SubCategory ID

- **Endpoint**: `GET /api/item/subcategory/:subCategoryId`
- **Description**: Get items by their parent subcategory ID.
- **Response**: Returns an array of items linked to the specified subcategory.

#### Search Item by Name

- **Endpoint**: `GET /api/item/search?name=Orange`
- **Description**: Search for items by name (case-insensitive).
- **Response**: Returns an array of items matching the search query.

#### Edit Item

- **Endpoint**: `PUT /api/item/:id`
- **Description**: Update an existing item by ID.
- **Request Body**: Same as Create an Item.
- **Response**: Returns the updated item with the recalculated `totalAmount`.

## Testing with Postman

You can use Postman to test the API endpoints. Import the provided [Postman collection](https://www.postman.com/navigation-administrator-16818055/workspace/delidex/collection/36466731-4772af59-d369-4d61-9fd1-4ce16483e06f?action=share&creator=36466731) or manually create requests following the above documentation.

### Example Postman Requests

1. **Create a Category**:
   - Method: `POST`
   - URL: `http://localhost:3000/api/category`
   - Body (JSON):
     ```
     {
       "name": "Vegetables",
       "image": "vegetables.png",
       "description": "Green and leafy vegetables",
       "taxApplicability": true,
       "tax": 8,
       "taxType": "percentage"
     }
     ```

2. **Get All Categories**:
   - Method: `GET`
   - URL: `http://localhost:3000/api/category`

## Project Structure

```
├── app.js               # Entry point of the application
├── routes.js            # Defines API routes for categories, subcategories, and items
├── models.js            # Mongoose schemas and models for the MongoDB collections
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Dependencies

- **Express**: Web framework for Node.js
- **Mongoose**: MongoDB object modeling tool for Node.js
- **Body-parser**: Middleware to parse incoming request bodies in JSON format

Install dependencies using:

```
npm install express mongoose body-parser
```

## Running the Project

1. Start your MongoDB server:

```
mongod
```

2. Run the Node.js server:

```
node app.js
```

3. The server should start on `http://localhost:3000`, and you can begin testing the API using Postman or other API testing tools.

## Error Handling

- **400**: Bad Request (e.g., missing required fields in the request body).
- **404**: Not Found (e.g., when a resource with the specified ID does not exist).
- **500**: Internal Server Error (e.g., issues with the database or server).

## Contributing

If you wish to contribute to this project, feel free to open an issue or submit a pull request. Please ensure that your code follows best practices and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Additional Notes:
- Ensure MongoDB is running on your machine before starting the application.
- Use Postman or curl to test the endpoints interactively.
- You can enhance the README by including further deployment instructions if needed.

