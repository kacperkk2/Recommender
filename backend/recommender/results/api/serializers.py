from rest_framework import serializers


class RecommendationElementSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    crag = serializers.CharField(max_length=50)
    sector = serializers.CharField(max_length=50)

    # czy nie dac rank ?