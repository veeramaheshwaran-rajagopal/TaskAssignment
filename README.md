# TaskAssignment

This is a simple Node.js application that provides a facebook login integeration,razorpay integeration,twilio send otp as sms service,mongodb relationships,promise handling,word to pdf conversion

## Prerequisites
- Node.js 20 and npm installed on your system.

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/veeramaheshwaran-rajagopal/TaskAssignment.git
```


2. Navigate to the project directory:
```bash
cd TaskAssignment
```

3.Set the environment variables:

```bash
cp .env
```

3. Install dependencies:
```bash
npm install
```


4. Start the application:
```bash
npm run start:dev
```

The API will be accessible at `http://localhost:3000/api`.
## Facebook API Endpoint:
- **POST /user/auth/facebook**: login with the facebook using passport library.

## Razorpay API Endpoints:
- **Post /payment/createOrder**: create the order in razorpay.
- **Post /payment/verifyOrder**: verify the order with signature in razorpay.

## word to pdf Conversion API Endpoint:
- **Post /WordToPdf/convert**:upload file that want to convert from word to pdf using npm package

## promise handling API Endpoint:
- **Post /promiseHandling/execute**:handling promises with three functions

## send otp to mobile number API Endpoint:
- **Post /otp/sendOtp**:send otp to mobile number using twilio service

## mongodb relationship API Endpoint:
- **Post /relationship/addProfile**:add a profile
- **Post /relationship/addUser**:add user
- **Post /relationship/addAuthor**:add author for books
- **Post /relationship/addBook**:add book by author
- **Post /relationship/addStudent**:add new student
- **Post /relationship/addCourse**:add new course
- **Post /relationship/assignCourse**:assignCourse to student
- **Post /relationship/oneToOneRelationship**:get profile with related user(one To One Relationship )
- **Post /relationship/oneToManyRelationship**:get books with related author(one To Many Relationship )
- **Post /relationship/oneToOneRelationship**:fetching  student with related course(many To many Relationship )

Make API requests using your preferred HTTP client (e.g., cURL, Postman, or any programming language).