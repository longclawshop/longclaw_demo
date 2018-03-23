from django.db import models
from modelcluster.fields import ParentalKey
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel

from longclaw.longclawproducts.models import ProductVariantBase, ProductBase

class MyProductIndex(Page):
    '''Example of a custom product index
    '''
    subpage_types = ('products.MyCustomProduct', )
    description = RichTextField()

    content_panels = Page.content_panels + [
        FieldPanel('description')
    ]

class MyCustomProduct(ProductBase):
    description = RichTextField()

    content_panels = ProductBase.content_panels + [
        InlinePanel('variants', label='Product variants'),
        FieldPanel('description')
    ]


class ProductVariant(ProductVariantBase):
    product = ParentalKey(MyCustomProduct, related_name='variants')
    # Enter your custom product variant fields here
    # e.g. colour, size, stock and so on.
    # Remember, ProductVariantBase provides 'price', 'ref', 'slug' fields
    # and the parental key to the Product model.
    _FORMAT_CHOICES = (
        ('CD', 'CD'),
        ('Vinyl', 'Vinyl')
    )
    music_format = models.CharField(max_length=10, choices=_FORMAT_CHOICES)
