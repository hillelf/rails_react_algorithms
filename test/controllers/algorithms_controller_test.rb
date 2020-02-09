require 'test_helper'

class AlgorithmsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get algorithms_index_url
    assert_response :success
  end

end
