class RespondersController < ApplicationController

    def index
        render json: Responder.all, status: :ok
    end

    def show
        render json: find_responder, serializer: ResponderDispatcherSerializer, status: :ok
    end

    def create
        responder =  Responder.create!(responder_params)
        render json: responder, status: :created
    end

    def update
        responder = find_responder
        responder.update!(responder_params)
        render json: responder, status: :accepted
    end

    private

    def find_responder
        Responder.find(params[:id])
    end

    def responder_params
        params.permit(:name, :distance, :available)
    end
end
