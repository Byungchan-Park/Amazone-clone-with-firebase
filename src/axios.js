import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-e2637/us-central1/api", // THE API (cloud function) URL
})

export default instance

// https://us-central1-challenge-e2637.cloudfunctions.net/api

// http://localhost:5001/challenge-e2637/us-central1/api
