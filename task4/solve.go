package main

import "unicode"
import "strings"

func RemoveEven(nums []int) []int {
  var result []int = make([]int, 0);
  for _, num := range nums {
    if num % 2 == 1 {
      result = append(result, num)
    }
  }
  return result
}

func PowerGenerator(num int) (func() int) {
  cur := num
  return func() int {
    ret := cur
    cur *= num
    return ret
  }
}

func DifferentWordsCount(s string) int {
  s += " "
  n := len(s)
  s = strings.ToLower(s)
  mp := make(map[string]bool)
  curWord := ""
  result := 0
  for i := 0; i < n; i++ {
    if !unicode.IsLetter(rune(s[i])) {
      if curWord != "" {
        if !mp[curWord] {
          mp[curWord] = true
          result++
        }
      }
      continue
    }
    curWord += string(s[i])
  }
  return result
}
