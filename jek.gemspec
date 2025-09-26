# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jek"
  spec.version       = "0.1.0"
  spec.authors       = ["Sid Roberts"]
  spec.email         = ["sid@sidroberts.co.uk"]

  spec.summary       = "Write a short summary, because Rubygems requires one."
  spec.homepage      = "https://sidroberts.co.uk/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(_assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
