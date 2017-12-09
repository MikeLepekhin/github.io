package main

import (
    "io/ioutil"
    "net/http"
    "encoding/json"
)

var result map[string]string

var lastUsed int

func newLink() string {
    lastUsed += 1
    x := lastUsed
    res := ""
    for x > 0 {
        res = string('0' + (x % 10)) + res
        x /= 10
    }
    return res
}

func redirect(w http.ResponseWriter, r *http.Request) {
    url, ok := result[r.RequestURI[1:]]
    if !ok {
        http.NotFound(w, r)
        return
    }
    http.Redirect(w, r, url, 301)
}

func shortenerHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		var body []byte
		defer r.Body.Close()
		body, _ = ioutil.ReadAll(r.Body)
		var req map[string]string
		err := json.Unmarshal(body, &req)
		if err == nil {
			url, ok := req["url"]
			if ok {
				key := newLink()
				result[key] = url
				respMap := make(map[string]string)
				respMap["key"] = key
				resp, _ := json.Marshal(respMap)
				w.Write(resp)
				return
			}
		}
		http.Error(w, "", 400);
	} else {
		redirect(w, r)
	}

}

func main() {
    result = make(map[string]string)
    lastUsed = 0
    http.HandleFunc("/", shortenerHandler)
    http.ListenAndServe(":8082", nil)
}
