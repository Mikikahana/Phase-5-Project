class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        dispatcher = Dispatcher.find_by(email: params[:email])
        if dispatcher&.authenticate(params[:password])
            session[:dispatcher_id] = dispatcher.id
            render json: dispatcher, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :dispatcher_id
        head :no_content
    end
end
