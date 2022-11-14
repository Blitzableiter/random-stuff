# ruby combineStrings.rb a b c d e f g 3
# => [["a", "b", "c"], ["d", "e", "f"], ["g"]]
def combineStrings(arg)
  vals = arg.slice(0,arg.length-1)
  size = arg.slice(arg.length-1).to_i
  return vals.each_slice(size).to_a
end

p combineStrings(ARGV)