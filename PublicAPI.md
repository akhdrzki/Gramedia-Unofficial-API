
## API Reference

### Request
Following the request by:

***URL:*** `https://www.gramedia.com`

***Method:*** `GET`

#### Get popular book

```http
  GET https://www.gramedia.com/api/algolia/search/product/?page=1&per_page=20&category=buku&based_on=best-seller
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `int` | **Optional**. page base on website  |
| `per_page` | `int` | **Optional**. item per page, can modified how much item would show per page  |
| `category` | `str` | **Optional**. category of item, i still recomended to following this default category |
| `base_on` | `str` | **Required**. filtering item  |


I still recommend to use all those parameters as example for correct data.

This is example we do not following all parameters, in this case it will return incorrect data. Why?? see the endpoints, we put **"based_on=best-seller"** as params. See the response bottom:
```http
GET https://www.gramedia.com/api/algolia/search/product/?based_on=best-seller
```

❌ **Response**

```json
[
    	{
		"name": "One Piece 105",
		"authors": [
			{
				"title": "Eiichiro Oda",
				"slug": "author-eiichiro-oda"
			}
		],
		"categoriesSlug": [
			"buku",
			"manga",
			"komik",
			"petualangan"
		],
		"rel": "soft-cover",
		"basePrice": 45000.0,
		"multisellerStoreId": "16",
		"publishDate": "2024-03-09T17:00:00+00:00",
		"publishDateTimestamp": 1710003600.0,
		"isPreOrder": false,
		"isAvailable": true,
		"ratingStar": 0,
		"totalRating": 0,
		"thumbnail": "https://cdn.gramedia.com/uploads/picture_meta/2024/3/10/easiw6vryfc4485wl7zhn3.jpg",
		"type": "book",
		"slug": "one-piece-105",
	❌	"isBestseller": false,
		"popularity": 0,
		"isNew": false,
	❌	"isMostPopular": false,
		"formats": [
			"soft-cover"
		],
		"createdAt": 1709571206,
		"vendorID": 2,
		"vendorType": null,
		"metaID": 655604,
		"warehouse": {
			"name": null,
			"code": null,
			"city": null,
			"state": null
		},
		"_geoloc": {
			"lat": 0,
			"lng": 0
		},
		"objectID": "8594211",
		"_highlightResult": {
			"name": {
				"value": "One Piece 105",
				"matchLevel": "none",
				"matchedWords": []
			},
			"authors": [
				{
					"title": {
						"value": "Eiichiro Oda",
						"matchLevel": "none",
						"matchedWords": []
					}
				}
			],
			"categoriesSlug": [
				{
					"value": "buku",
					"matchLevel": "none",
					"matchedWords": []
				},
				{
					"value": "manga",
					"matchLevel": "none",
					"matchedWords": []
				},
				{
					"value": "komik",
					"matchLevel": "none",
					"matchedWords": []
				},
				{
					"value": "petualangan",
					"matchLevel": "none",
					"matchedWords": []
				}
			],
			"rel": {
				"value": "soft-cover",
				"matchLevel": "none",
				"matchedWords": []
			},
			"metaID": {
				"value": "655604",
				"matchLevel": "none",
				"matchedWords": []
			}
		},
		"promoPrice": 36000,
		"promoPercentage": 20,
		"appliedPromoSlug": "payday-mei-2024-20"
	},
]
```

In this case we try to get all popular and best seller book as the parameter.. but we'll retreive **"isBestseller"** and **"isMostPopular"** as false, see the response that i mark with ❌.


But if we do sent request with all parameter, we'll retreive correct data :)

✅ **Response**

```json
[
    {
		"name": "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa Edisi Hardcover",
		"authors": [
			{
				"title": "James Clear",
				"slug": "author-james-clear"
			}
		],
		"categoriesSlug": [
			"buku",
			"pengembangan-diri"
		],
		"rel": "hard-cover",
		"basePrice": 128000.0,
		"multisellerStoreId": "1",
		"publishDate": "2023-01-17T17:00:00+00:00",
		"publishDateTimestamp": 1673974800.0,
		"isPreOrder": false,
		"isAvailable": true,
		"ratingStar": 0,
		"totalRating": 0,
		"thumbnail": "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
		"type": "book",
		"slug": "atomic-habits-perubahan-kecil-yang-memberikan-hasil-luar-biasa",
		"isBestseller": false,
		"popularity": 0,
		"isNew": false,
		"isMostPopular": false,
		"formats": [
			"hard-cover"
		],
		"createdAt": 1673420015,
		"vendorID": 3,
		"vendorType": null,
		"metaID": 634314,
		"warehouse": {
			"name": null,
			"code": null,
			"city": null,
			"state": null
		},
		"_geoloc": {
			"lat": 0,
			"lng": 0
		},
		"objectID": "6929912",
		"_highlightResult": {
			"name": {
				"value": "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa Edisi Hardcover",
				"matchLevel": "none",
				"matchedWords": []
			},
			"authors": [
				{
					"title": {
						"value": "James Clear",
						"matchLevel": "none",
						"matchedWords": []
					}
				}
			],
			"categoriesSlug": [
				{
					"value": "buku",
					"matchLevel": "none",
					"matchedWords": []
				},
				{
					"value": "pengembangan-diri",
					"matchLevel": "none",
					"matchedWords": []
				}
			],
			"rel": {
				"value": "hard-cover",
				"matchLevel": "none",
				"matchedWords": []
			},
			"metaID": {
				"value": "634314",
				"matchLevel": "none",
				"matchedWords": []
			}
		},
		"promoPrice": 102400,
		"promoPercentage": 20,
		"appliedPromoSlug": "payday-mei-2024-20"
	},
]
```
