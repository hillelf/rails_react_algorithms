class V1::AlgorithmsController < ApplicationController
  def index
	  render json: { :algorithms => [
			{
				name: "Frequency Counter",
				path: "/"
			},
			{
				name: "Multiple Pointers",
				path: "/"
			},
			{
				name: "Sliding Window",
				path: "/"
			}
		] }.to_json
  end
end
