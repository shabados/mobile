def read_json(params)
  require 'json'

  return JSON.parse(File.read(params[:path]))
end

def get_version
  version, = read_json(path: '../package.json')['version'].split('-')

  return version
end

def base64_to_file(string, file_path)
  require 'base64'

  file_content = Base64.decode64(string)

  File.open(file_path, 'wb') { |f| f.write(file_content) }
end
