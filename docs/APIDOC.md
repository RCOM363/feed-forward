# API Documentation

## Schema

![schema](https://github.com/RCOM363/feed-forward/blob/main/frontend/public/feedforward.drawio.png)

## User Authentication & Management

### Donor Signup

- **Endpoint:** `/api/v1/users/donor-signup`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
avatar: [file]
username: [string]
email: [string]
phoneNo: [string]
password: [string]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
donorType: [individual/organization]
```

### Recipient Signup

- **Endpoint:** `/api/v1/users/recipient-signup`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
avatarImage: [file]
username: [string]
email: [string]
phoneNo: [string]
password: [string]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
organizationType: [string]
registrationNo: [string]
```

### Login

- **Endpoint:** `/api/v1/users/login`
- **Method:** `POST`
- **Body (JSON):**

```json
{
  "email": "[string]",
  "password": "[string]"
}
```

### Get User Profile

- **Endpoint:** `/api/v1/users/get-user-profile`
- **Method:** `GET`

### Create City Admin

- **Endpoint:** `/api/v1/users/create-city-admin`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
username: [string]
email: [string]
phoneNo: [string]
password: [string]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
```

### Get Dashboard Data

- **Endpoint:** `/api/v1/users/get-dashboard-data`
- **Method:** `GET`

### Logout

- **Endpoint:** `/api/v1/users/logout`
- **Method:** `POST`

## City Admin

### Verify Recipient

- **Endpoint:** `/api/v1/cityAdmin/verify-recipient/`
- **Method:** `PATCH`

### Get Food Requests

- **Endpoint:** `/api/v1/cityAdmin/get-food-requests`
- **Method:** `GET`

### Get Food Posts

- **Endpoint:** `/api/v1/cityAdmin/get-food-posts`
- **Method:** `GET`

### Get Verification List

- **Endpoint:** `/api/v1/cityAdmin/get-verification-list`
- **Method:** `GET`

### Reject Recipient

- **Endpoint:** `DELETE /api/v1/cityAdmin/verify-recipient/`
- **Method:** `DELETE`

## Food Post Management

### Add Food Post

- **Endpoint:** `/api/v1/foodPost/add-post`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
images: [file(s)]
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
bestBefore: [date]
useUserLocation: [true/false]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
```

### Update Food Post

- **Endpoint:** `/api/v1/foodPost/update-post/:postId`
- **Method:** `PATCH`
- **Body (form-data):**

```plaintext
images: [file(s)]
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
bestBefore: [date]
useUserLocation: [true/false]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
```

### Delete Food Post

- **Endpoint:** `/api/v1/foodPost/delete-post/:postId`
- **Method:** `DELETE`

### Get Donor Posts

- **Endpoint:** `/api/v1/foodPost/get-donor-posts`
- **Method:** `GET`

### Get Available Posts

- **Endpoint:** `/api/v1/foodPost/get-available-posts`
- **Method:** `GET`

### Request Food

- **Endpoint:** `/api/v1/foodPost/request-food/`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
bestBefore: [date]
useUserLocation: [true/false]
coordinates: [latitude, longitude]
address: [string]
state: [string]
city: [string]
pincode: [string]
```

## Food Requests

### Add Food Request

- **Endpoint:** `/api/v1/foodRequest/add-request`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
requiredBy: [date]
```

### Update Food Request

- **Endpoint:** `/api/v1/foodRequest/update-request/`
- **Method:** `PATCH`
- **Body (form-data):**

```plaintext
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
requiredBy: [date]
```

### Delete Food Request

- **Endpoint:** `/api/v1/foodRequest/delete-request/:requestId`
- **Method:** `DELETE`

### Get All Requests

- **Endpoint:** `/api/v1/foodRequest/get-requests`
- **Method:** `GET`

### Get Recipient Requests

- **Endpoint:** `/api/v1/foodRequest/get-recipient-requests`
- **Method:** `GET`

### Fulfill Request

- **Endpoint:** `/api/v1/foodRequest/fulfill-request/`
- **Method:** `POST`
- **Body (form-data):**

```plaintext
title: [string]
description: [string]
quantity: [number]
quantityUnit: [string]
foodType: [veg/non-veg]
requiredBy: [date]
```

## Admin

### Get City Admins

- **Endpoint:** `/api/v1/admin/get-city-admins`
- **Method:** `GET`

### Remove City Admin

- **Endpoint:** `/api/v1/admin/remove-city-admin/:id`
- **Method:** `DELETE`
