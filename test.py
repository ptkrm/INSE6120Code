import dns.resolver

from sys import argv

script, firstArg = argv

ns = dns.resolver.Resolver()
ans = ns.query(firstArg, 'NS')
#print ans

for i in ans:
    print i

#ns = dns.resolver.query('google.com', 'NS')
#print ns.resolver.answer