from django.db import models

from django.db import models

class Property(models.Model):
    address = models.CharField(max_length=255)  # Stores the property’s address as a string
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)  # Stores the purchase price as a decimal
    expected_rent = models.DecimalField(max_digits=7, decimal_places=2)  # Stores the expected rent as a decimal
    description = models.TextField(blank=True, null=True)  # Optional description of the property

    def __str__(self):
        return self.address  # Returns the address when the object is printed

