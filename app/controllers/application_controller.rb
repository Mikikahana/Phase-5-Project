class ApplicationController < ActionController::API
include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
rescue_from ActiveRecord::RecordNotFound, with: :not_found
before_action :authorized_user


    def authorized_user
        @current_user = Dispatcher.find_by(id: session[:dispatcher_id])
        render json: {errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

private

    def invalid_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: ["Not Found"]}, status: 404
    end

end
