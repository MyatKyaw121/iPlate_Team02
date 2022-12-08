const express = require("express");
const request = require('supertest')
const app = require('./app.js')


 // Login Testing ==>Successful
 describe("Test POST /api/login", () => {
    describe("when user name and password is passed in correctly", () => {
        test("should respond with", async () => {


            const res = await request(app).post("/api/login").send({
                username: "eee",
                password: "eee",
            })

            expect(res.status).toBe(200)
            expect(res.body.username).toBe("eee")


        })


    })
})


 // Signup Testing ==>Successful
 describe("Test POST /api/signUp", () => {
    describe("when user name, password and confirmPassword are provided", () => {
        test("should respond with", async () => {

            const res = await request(app).post("/api/signup").send({
                username: "test_signup2",
                password: "test_signup2",
                confirmPassword: "test_signup2"
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Signed up successfully!!")


        })


    })
})





// User log in Testing  ==> Failed
describe("Test POST /api/login", () => {
    describe("when the password is passed in incorrectly", () => {
        test("should respond with password not matched", async () => {


            const res = await request(app).post("/api/login").send({
                username: "eee",
                password: "i9r3ri3ri2",
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Password is wrong!!")

        })
    })
})

// User log in Testing  ==> Failed
describe("Test POST /api/login", () => {
    describe("when user name is passed in incorrectly", () => {
        test("should respond with cannot find user", async () => {


            const res = await request(app).post("/api/login").send({
                username: "ewewewewe",
                password: "eee",
            })
            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Can not find the user!")

        })
    })
})


// Signup Testing ==> Failed

 describe("Test POST /api/signUp", () => {
    describe("when either user name, password and confirmPassword are not provided", () => {
        test("should respond with", async () => {

            const res = await request(app).post("/api/signup").send({
                username: "",
                password: "test_signup",
                confirmPassword: "test_signup"
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Username or password cannot be empty")


        })


    })
})


// Signup Testing ==> Failed ( User already exists)
describe("Test POST /api/signUp", () => {
    describe("when existing user name is provided", () => {
        test("should respond with", async () => {

            const res = await request(app).post("/api/signup").send({
                username: "test_signup",
                password: "test_signup",
                confirmPassword: "test_signup"
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("User already exists")
        })


    })
})




 // FoodRecord Testing successful
 describe("Test POST /api/FoodRecord", () => {
    describe("when logged in user records meal (breakfast) for particular date it should be allowed", () => {
        test("should respond with", async () => {

            const res = await request(app).post("/api/FoodRecord").send({
                name: "test_signup",
                date: "5-7-2022",
                mealType: "breakfast",
                    veggie: [
                {
                    "name" : "Broccoli",
                    "amount" : 11
                },
                {
                    "name" : "Cabbage",
                    "amount" :11
                },
                {
                    "name" : "Spinach",
                    "amount" :11
                },
                {
                    "name" : "Kale",
                    "amount" : 11
                }
            ],
                    fruits: [],
                    protein: [],
                    grains: [],
            })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Data Record Inserted successfully!!")
        })
    })
})



 // FoodHistory Testing ==> Successful
 describe("Test POST /api/FoodHistory", () => {
    describe("when logged in user reviews the record by providing date and name", () => {
        test("should respond with", async () => {

            const res = await request(app).post("/api/FoodHistory").send({
                name: "test_signup",
                date:  "5-7-2022"
            })

            // const result={
            //     name: "test_signup",
            //     date: "5-5-2022",
            //     mealType: "breakfast",
            //     veggie: [
            //         {
            //             "name" : "Broccoli",
            //             "amount" : 11
            //         },
            //         {
            //             "name" : "Cabbage",
            //             "amount" :11
            //         },
            //         {
            //             "name" : "Spinach",
            //             "amount" :11
            //         },
            //         {
            //             "name" : "Kale",
            //             "amount" : 11
            //         }
            //     ],
            //     fruits: [],
            //     protein: [],
            //     grains: [],
            // }

            expect(res.status).toBe(200)
            // expect(res.body.message).toBe("Data Record Inserted successfully!!")
        })
    })
})



// FoodHistory Testing ==> UnSuccessful  wrong date
describe("Test POST /api/FoodHistory", () => {
    describe("when logged in user reviews the record by providing wrong date and name", () => {
        test("should respond with failure", async () => {

            const res = await request(app).post("/api/FoodHistory").send({
                name: "test_signup",
                date:  "5-200-2022"
            })

            // const result={
            //     name: "test_signup",
            //     date: "5-5-2022",
            //     mealType: "breakfast",
            //     veggie: [
            //         {
            //             "name" : "Broccoli",
            //             "amount" : 11
            //         },
            //         {
            //             "name" : "Cabbage",
            //             "amount" :11
            //         },
            //         {
            //             "name" : "Spinach",
            //             "amount" :11
            //         },
            //         {
            //             "name" : "Kale",
            //             "amount" : 11
            //         }
            //     ],
            //     fruits: [],
            //     protein: [],
            //     grains: [],
            // }

            expect(res.body.message).toBe("User data doesn't exist for the specified date")
            // expect(res.body.message).toBe("Something goes wrong ")
        })
    })
})


