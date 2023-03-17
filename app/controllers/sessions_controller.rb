class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create
        dispatcher = Dispatcher.find_by(name: params[:name])
        if dispatcher&.authenticate(params[:password])
            session[:dispatcher_id] = dispatcher.id
            render json: dispatcher, status: :ok
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :dispatcher_id
        head :no_content
    end
end
