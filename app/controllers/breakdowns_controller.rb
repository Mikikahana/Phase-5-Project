class BreakdownsController < ApplicationController

    def index
        render json: Breakdown.all, status: :ok
    end

    def show
        render json: find_breakdown, serializer: BreakdownDispatchSerializer, status: :ok
    end

    def create
        breakdown = Breakdown.create!(breakdown_params)
        render json: breakdown, status: :created
    end

    def update
        breakdown = find_breakdown
        breakdown.update!(breakdown_params)
        render json: breakdown, status: :accepted
    end

    def destroy
        breakdown = find_breakdown
        breakdown.destroy
        head :no_content
    end

    private

    def find_breakdown
        Breakdown.find(params[:id])
    end

    def breakdown_params
        params.require(:breakdown).permit(:name, :address, :image, :phone_number, :description, :car_type, :dispatcher_id)
    end
end
