class BreakdownRespondersController < ApplicationController

    def index
        render json: BreakdownResponder.all, status: :ok
    end

    def show
        render json: find_br, status: :ok
    end

    def update
        br = find_br
        br.update!(br_params)
        render json: br, status: :accepted
    end

    private

    def find_br
        BreakdownResponder.find(params[:id])
    end

    def br_params
        params.permit(:responder_id, :breakdown_id)
    end
end
