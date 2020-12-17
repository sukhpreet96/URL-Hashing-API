1. Assuming the system to be read heavy.
2. Assuming 50:1 read-write ratio.
3. Assuming to have 300M new URL shortenings per month, with 50:1 read/write, we expect 50*300M = 15B redirections.
4. Assuming, we store URLs for 3 years. Since we are expecting 300M new URLs every month, the total number of objects we will be storing 300M * 5 Years * 12 months = 18B. Assuming each object of 600 Bytes in mongoDB, we will need 18B * 600 B = 10.8 TB  
