require 'dotenv'

before_all do |lane, options|
  puts options
  environment = options[:app_env] || 'local'

  env_file = ".env.#{environment}"

  puts "Loading #{env_file}"
  Dotenv.overload("../config/#{env_file}")
end
