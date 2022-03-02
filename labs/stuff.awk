BEGIN {
 FS = ","
 OFS = "\t\t "
}

{

total = 0;
 for(i = 8; i < NF; i++){
  total += $i	
 }
arr["$FNR"] = total
n = asort(arr)
 print FNR, $7, $4, $5, $6, n > "output.csv"
 
 
}



END {
print "program ended"
}

