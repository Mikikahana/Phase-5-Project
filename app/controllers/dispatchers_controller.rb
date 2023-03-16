class DispatchersController < ApplicationController

    def index
        render json: Dispatcher.all, status: :ok
    end

    def show
        dispatcher = find_dispatcher
        render json: dispatcher, status: :ok
    end

    def create
        dispatcher = Dispatcher.create!(dispatcher_params)
        session[:dispatcher_id] = dispatcher.id
        render json: dispatcher, status: :created
    end

    def update
        dispatcher = find_dispatcher
        dispatcher.update!(dispatcher_params)
        render json: dispatcher, status: :accepted
    end

    def destroy
        dispatcher = find_dispatcher
        dispatcher.destroy
        head :no_content
    end

    private

    def find_dispatcher
        Dispatcher.find(params[:id])
    end

    def dispatcher_params
        params.permit(:name, :email, :password)
    end
end
