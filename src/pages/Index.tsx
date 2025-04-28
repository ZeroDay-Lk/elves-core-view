
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchForm } from "@/components/search-form";
import { ResultTabs } from "@/components/result-tabs";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isAnalyzed, setIsAnalyzed] = useState(true); // Set to true to show results by default

  // Sample data based on the provided information for elvescore.jp
  const sampleData = {
    generalInfo: {
      serverLocation: "M4M, トロント, オンタリオ, カナダ",
      country: "カナダ",
      timezone: "America/Toronto",
      languages: "en-CA, fr-CA, iu",
      currency: "ドル (CAD)",
      coordinates: "緯度 43.6561, 経度 -79.3486",
    },
    sslCertificate: {
      subject: "elvescore.jp",
      issuer: "Google Trust Services",
      algorithm: "ANSI prime256v1 (NIST Curve P-256)",
      expires: "2025年6月28日",
      renewed: "2025年3月30日",
      serial: "13618F38263FA3250E...",
      fingerprint: "32:39:...",
      extendedKeyUsage: "TLS Web サーバー認証",
    },
    headers: {
      contentType: "2001年8月1日",
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
        csp: false,
        stp: false,
        xcto: false,
        xfo: false,
        xxp: false,
      },
      hstsCheck: false,
      dnssec: false,
      firewall: true,
      securityTxt: false,
    },
    serverInfo: {
      status: true,
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
      firstScan: "2024年2月23日",
      lastScan: "2025年2月20日",
      totalScans: 32,
      changeCount: 30,
      avgSize: "27458バイト",
      avgDaysBetweenScans: 11.33,
    },
    redirects: {
      count: 2,
    },
    threats: {
      phishingStatus: true,
      malwareStatus: true,
    },
    blockLists: {
      blocked: false,
    },
    carbonFootprint: {
      initialSize: "2.265バイト",
      co2ForInitialLoad: "0.0007552グラム",
      energyUsageForLoad: "0.000001709 KMg",
    },
  };

  const handleSearch = (domain: string) => {
    // In a real application, this would trigger an API call
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
              <div>
                <h1 className="text-xl font-bold text-tiffany">Elves Core</h1>
                <p className="text-xs text-muted-foreground">ウェブセキュリティ分析</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4">
                <Button variant="ghost">機能</Button>
                <Button variant="ghost">情報</Button>
                <Button variant="ghost">GitHub</Button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                高度な<span className="text-tiffany">ウェブセキュリティ</span>スキャナー
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Elves Coreはドメインの包括的なセキュリティ分析を提供します — SSL、DNS、ヘッダー、その他多くの情報を含みます。
              </p>
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
                    <div>
                      <h2 className="text-2xl font-bold mb-2">elvescore.jp の分析結果</h2>
                      <p className="text-muted-foreground">
                        最終スキャン: 2025年2月20日
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-success-DEFAULT/20 text-success-DEFAULT px-3 py-1 rounded-full text-sm">
                        ✅ オンライン
                      </div>
                      <Button variant="outline" size="sm">
                        結果をエクスポート
                      </Button>
                    </div>
                  </div>

                  <ResultTabs data={sampleData} />
                </div>
              </div>
            </section>
          )}
        </main>

        <footer className="bg-background border-t border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Elves Core. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  プライバシーポリシー
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  利用規約
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                  お問い合わせ
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
