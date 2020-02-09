require 'test_helper'

class AlgorithmsControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get algorithms_list_url
    assert_response :success
  end

end
