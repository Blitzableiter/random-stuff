package main

import "log"

func CombineStrings(args []string, maxSize int) []string {
	if len(args) == 0 {
		return []string{}
	}

	current := ""
	result := []string{}

	for _, s := range args {
		if current == "" {
			current = s
			continue
		} else if len(current)+len(s)+1 <= maxSize {
			current += " " + s
		} else {
			result = append(result, current)
			current = s
		}
	}
	result = append(result, current)

	return result
}

func main() {
	log.Println(CombineStrings([]string{"a", "b", "c", "d", "e"}, 5)[0])  // prints "a b c"
	log.Println(CombineStrings([]string{"a", "b", "c", "d", "e"}, 5)[1])  // prints "d e"
	log.Println(CombineStrings([]string{"a", "b", "c"}, 10)[0])           // prints "a b c"
	log.Println(CombineStrings([]string{"a", "b", "c"}, 5)[0])            // prints "a b c"
	log.Println(CombineStrings([]string{"alpha", "beta", "gamma"}, 4)[0]) // prints "alpha"
	log.Println(CombineStrings([]string{"alpha", "beta", "gamma"}, 4)[1]) // prints "beta"
	log.Println(CombineStrings([]string{"alpha", "beta", "gamma"}, 4)[2]) // prints "gamma"
}
