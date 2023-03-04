/**
  Title: http-client.js
  Author: Erin Brady
  Date: 22 Feb 2023
  Description: WhatABook App Part 2: HTTP Client
*/

export default class HttpClient {

    async get(url, params = "") {
        url = new URL(url)
        url.search = new URLSearchParams(params)

        const res = await fetch(url.toString(), {
            method: "GET"
        })

        return res.json()
    }
}
