def read_json(params)
  require 'json'

  return JSON.parse(File.read(params[:path]))
end

def get_version
  version = read_json(path: '../package.json')['version']

  return version
end
