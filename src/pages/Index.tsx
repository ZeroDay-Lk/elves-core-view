import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchForm } from "@/components/search-form";
import { ResultTabs } from "@/components/result-tabs";
import { Button } from "@/components/ui/button";
import { MatrixRain } from "@/components/matrix-rain";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import Globe from '@/components/Globe';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Index = () => {
  const [isAnalyzed, setIsAnalyzed] = useState(true);

  const sampleData = {
    generalInfo: {
      serverLocation: "M4M, Toronto, Ontario, Canada",
      country: "Canada",
      timezone: "America/Toronto",
      languages: "en-CA, fr-CA, iu",
      currency: "Dollar (CAD)",
      coordinates: "Latitude 43.6561, Longitude -79.3486",
    },
    sslCertificate: {
      subject: "elvescore.jp",
      issuer: "Google Trust Services",
      algorithm: "ANSI prime256v1 (NIST Curve P-256)",
      expires: "June 28, 2025",
      renewed: "March 30, 2025",
      serial: "13618F38263FA3250E...",
      fingerprint: "32:39:...",
      extendedKeyUsage: "TLS Web Server Authentication",
    },
    headers: {
      contentType: "August 1, 2001",
      transferEncoding: "chunked",
      connection: "keep-alive",
      xPoweredBy: "Next.js",
      cacheControl: "private, no-cache...",
      server: "Cloudflare",
    },
    dnsRecords: {
      aRecords: [
        "104.21.96.1",
        "104.21.112.1",
        "104.21.80.1",
        "104.21.48.1",
        "104.21.64.1",
        "104.21.52.1",
        "104.21.16.1",
      ],
      aaaaRecords: ["2606:4700:3030::68"],
      nsRecords: ["gene.ns.cloudflare", "aaden.ns.cloudflare"],
    },
    security: {
      httpSecurityHeaders: {
        csp: "False",
        stp: "False",
        xcto: "False",
        xfo: "False",
        xxp: "False",
      },
      hstsCheck: "False",
      dnssec: "False",
      firewall: "True",
      securityTxt: "False",
    },
    serverInfo: {
      status: "True",
      responseTime: "565ms",
      openPorts: ["80", "443", "8080"],
      closedPorts: [
        "20", "21", "22", "23", "25", "53", "67", "68", "69", "110", 
        "119", "123", "143", "156", "161", "162", "179", "194", "389", 
        "587", "993", "995", "3000", "3306", "3389", "5060", "5900", 
        "8000", "8888"
      ],
    },
    cookies: {
      nextLocale: "en",
      cfBm: "ZHNW_8xohgCCrmlUm...",
    },
    socialTags: {
      title: "Elves Core",
      description: "A Global Team of ...",
    },
    archiveHistory: {
      firstScan: "February 23, 2024",
      lastScan: "February 20, 2025",
      totalScans: "32",
      changeCount: "30",
      avgSize: "27458 bytes",
      avgDaysBetweenScans: "11.33",
    },
    redirects: {
      count: "2",
    },
    threats: {
      phishingStatus: "True",
      malwareStatus: "True",
    },
    blockLists: {
      blocked: "False",
    },
    carbonFootprint: {
      initialSize: "2.265 bytes",
      co2ForInitialLoad: "0.0007552 grams",
      energyUsageForLoad: "0.000001709 KMg",
    },
  };

  const handleSearch = (domain: string) => {
    console.log(`Analyzing domain: ${domain}`);
    setIsAnalyzed(true);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="elves-theme-preference">
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-border sticky top-0 z-10 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/6e5227c1-ccb3-4558-94ce-a83ac48610b6.png" 
                alt="Cyber Crew Logo" 
                className="h-8"
              />
              <p className="text-xs text-muted-foreground">Web Security Scanner</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4">
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">About</Button>
                <Button variant="ghost">GitHub</Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="relative py-12 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
            <MatrixRain />
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center">
                <SearchForm 
                  onSubmit={handleSearch} 
                  defaultValue="elvescore.jp"
                />
              </div>
            </div>
          </section>

          {isAnalyzed && (
            <section className="py-8">
              <div className="container mx-auto px-4">
                <div className="bg-card border border-border rounded-lg p-6 shadow-md">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold">Analysis Results for elvescore.jp</h2>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Detailed security analysis and technical information about the domain</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm">
                        ✅ Online
                      </div>
                      <Button variant="outline" size="sm">
                        Export Results
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">General Information</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.generalInfo).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground">{key}</span>
                            <span className="flex items-center">
                              {value}
                              {key === 'country' && (
                                <Globe coordinates={{ lat: 43.6561, lng: -79.3486 }} />
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">SSL Certificate</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.sslCertificate).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Headers</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.headers).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">DNS Records</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.dnsRecords).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{Array.isArray(value) ? value.join(", ") : value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Security</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.security).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>
                              {typeof value === 'object' 
                                ? Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ') 
                                : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Server Info</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.serverInfo).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{Array.isArray(value) ? value.join(", ") : value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Cookies</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.cookies).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Social Tags</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.socialTags).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Archive History</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.archiveHistory).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Redirects</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.redirects).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Threats</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.threats).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Block Lists</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.blockLists).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Carbon Footprint</h3>
                      <div className="space-y-2">
                        {Object.entries(sampleData.carbonFootprint).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-muted-foreground flex items-center gap-1">
                              {key}
                              <Popover>
                                <PopoverTrigger>
                                  <Info className="h-3 w-3 text-muted-foreground cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent>
                                  <p className="text-sm">Information about {key}</p>
                                </PopoverContent>
                              </Popover>
                            </span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <footer className="bg-background border-t border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Cyber Crew. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  Terms of Use
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
