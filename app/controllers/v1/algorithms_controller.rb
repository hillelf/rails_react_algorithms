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
			},
			{
				name: "Divide and Conquer",
				path: "/"
      }
		] }.to_json
  end
end
