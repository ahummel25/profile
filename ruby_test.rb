require 'json'

my_object = { :array => [1, 2, 3, { :sample => "hash"} ], :foo => "bar" }

my_object.each do |_, value|
	if value.instance_of?(Array)
		value.each do |array_key|
			if array_key.instance_of?(Hash)
				array_key.each do |hash_key, hash_value|
					puts "\nHash key: #{hash_key}, Hash value: #{hash_value}"
				end
			end
		end
	else
		puts "\nValue: #{value}"
	end
end

puts "\n #{JSON.pretty_generate(my_object)}"