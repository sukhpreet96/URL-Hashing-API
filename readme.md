1. The architecture of our API is based on a typical client server model.
2. The client can access the api at endpoint /api/url/shorten to post the long URL in order to get the shorter one.
3. I have choosed MongoDB as i didn't had any relational requirement and noSQL DB's like MongoDB are highly scalable.
4. The Database contains the fields longUrl, shortUrl, urlCode, date.
