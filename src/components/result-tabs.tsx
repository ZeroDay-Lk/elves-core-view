
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, StatusItem, ListItem } from "@/components/result-card";
import { Check, X } from "lucide-react";

interface WebCheckResult {
  generalInfo: {
    serverLocation: string;
    country: string;
    timezone: string;
    languages: string;
    currency: string;
    coordinates: string;
  };
  sslCertificate: {
    subject: string;
    issuer: string;
    algorithm: string;
    expires: string;
    renewed: string;
    serial: string;
    fingerprint: string;
    extendedKeyUsage: string;
  };
  headers: {
    contentType: string;
    transferEncoding: string;
    connection: string;
    xPoweredBy: string;
    cacheControl: string;
    server: string;
  };
  dnsRecords: {
    aRecords: string[];
    aaaaRecords: string[];
    nsRecords: string[];
  };
  security: {
    httpSecurityHeaders: {
      csp: boolean;
      stp: boolean;
      xcto: boolean;
      xfo: boolean;
      xxp: boolean;
    };
    hstsCheck: boolean;
    dnssec: boolean;
    firewall: boolean;
    securityTxt: boolean;
  };
  serverInfo: {
    status: boolean;
    responseTime: string;
    openPorts: string[];
    closedPorts: string[];
  };
  cookies: {
    nextLocale: string;
    cfBm: string;
  };
  socialTags: {
    title: string;
    description: string;
  };
  archiveHistory: {
    firstScan: string;
    lastScan: string;
    totalScans: number;
    changeCount: number;
    avgSize: string;
    avgDaysBetweenScans: number;
  };
  redirects: {
    count: number;
  };
  threats: {
    phishingStatus: boolean;
    malwareStatus: boolean;
  };
  blockLists: {
    blocked: boolean;
  };
  carbonFootprint: {
    initialSize: string;
    co2ForInitialLoad: string;
    energyUsageForLoad: string;
  };
}

export function ResultTabs({ data }: { data: WebCheckResult }) {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-8">
        <TabsTrigger value="general">一般情報</TabsTrigger>
        <TabsTrigger value="ssl">SSL証明書</TabsTrigger>
        <TabsTrigger value="headers">ヘッダー</TabsTrigger>
        <TabsTrigger value="dns">DNS記録</TabsTrigger>
        <TabsTrigger value="security">セキュリティ</TabsTrigger>
        <TabsTrigger value="server">サーバー情報</TabsTrigger>
        <TabsTrigger value="other">その他</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard title="一般情報">
          <ListItem label="サーバーの場所" value={data.generalInfo.serverLocation} />
          <ListItem label="国" value={data.generalInfo.country} />
          <ListItem label="タイムゾーン" value={data.generalInfo.timezone} />
          <ListItem label="言語" value={data.generalInfo.languages} />
          <ListItem label="通貨" value={data.generalInfo.currency} />
          <ListItem label="座標" value={data.generalInfo.coordinates} />
        </ResultCard>
        
        <ResultCard title="ソーシャルタグ">
          <ListItem label="タイトル" value={data.socialTags.title} />
          <ListItem label="説明" value={data.socialTags.description} />
        </ResultCard>
        
        <ResultCard title="脅威">
          <StatusItem 
            label="フィッシング状態" 
            value="フィッシングは検出されませんでした" 
            status={data.threats.phishingStatus ? "good" : "bad"} 
          />
          <StatusItem 
            label="マルウェア状態" 
            value="マルウェアは検出されませんでした" 
            status={data.threats.malwareStatus ? "good" : "bad"} 
          />
        </ResultCard>
        
        <ResultCard title="カーボンフットプリント">
          <ListItem label="初期サイズ" value={data.carbonFootprint.initialSize} />
          <ListItem label="初期負荷のCO2" value={data.carbonFootprint.co2ForInitialLoad} />
          <ListItem label="負荷のエネルギー使用量" value={data.carbonFootprint.energyUsageForLoad} />
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="ssl" className="grid grid-cols-1 gap-4">
        <ResultCard title="SSL証明書">
          <ListItem label="サブジェクト" value={data.sslCertificate.subject} />
          <ListItem label="発行者" value={data.sslCertificate.issuer} />
          <ListItem label="アルゴリズム" value={data.sslCertificate.algorithm} />
          <ListItem label="有効期限" value={data.sslCertificate.expires} />
          <ListItem label="更新日" value={data.sslCertificate.renewed} />
          <ListItem label="シリアル番号" value={data.sslCertificate.serial} />
          <ListItem label="フィンガープリント" value={data.sslCertificate.fingerprint} />
          <ListItem label="拡張キー使用法" value={data.sslCertificate.extendedKeyUsage} />
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="headers" className="grid grid-cols-1 gap-4">
        <ResultCard title="ヘッダー">
          <ListItem label="Content-Type" value={data.headers.contentType} />
          <ListItem label="Transfer-Encoding" value={data.headers.transferEncoding} />
          <ListItem label="Connection" value={data.headers.connection} />
          <ListItem label="X-Powered-By" value={data.headers.xPoweredBy} />
          <ListItem label="Cache-Control" value={data.headers.cacheControl} />
          <ListItem label="Server" value={data.headers.server} />
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="dns" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard title="DNS記録">
          <div className="space-y-2">
            <h4 className="font-semibold">Aレコード:</h4>
            <ul className="list-disc pl-5">
              {data.dnsRecords.aRecords.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">AAAAレコード:</h4>
            <ul className="list-disc pl-5">
              {data.dnsRecords.aaaaRecords.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">NSレコード:</h4>
            <ul className="list-disc pl-5">
              {data.dnsRecords.nsRecords.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </div>
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="security" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard title="HTTPセキュリティヘッダー">
          <StatusItem 
            label="Content Security Policy" 
            value="なし" 
            status={data.security.httpSecurityHeaders.csp ? "good" : "bad"} 
          />
          <StatusItem 
            label="Strict Transport Policy" 
            value="なし" 
            status={data.security.httpSecurityHeaders.stp ? "good" : "bad"} 
          />
          <StatusItem 
            label="X-Content-Type-Options" 
            value="なし" 
            status={data.security.httpSecurityHeaders.xcto ? "good" : "bad"} 
          />
          <StatusItem 
            label="X-Frame-Options" 
            value="なし" 
            status={data.security.httpSecurityHeaders.xfo ? "good" : "bad"} 
          />
          <StatusItem 
            label="X-XSS-Protection" 
            value="なし" 
            status={data.security.httpSecurityHeaders.xxp ? "good" : "bad"} 
          />
        </ResultCard>
        
        <ResultCard title="その他のセキュリティチェック">
          <StatusItem 
            label="HSTS有効" 
            value={data.security.hstsCheck ? "有効" : "無効"} 
            status={data.security.hstsCheck ? "good" : "bad"} 
          />
          <StatusItem 
            label="DNSSEC" 
            value={data.security.dnssec ? "存在する" : "存在しない"} 
            status={data.security.dnssec ? "good" : "bad"} 
          />
          <StatusItem 
            label="ファイアウォール" 
            value="Cloudflare WAF" 
            status={data.security.firewall ? "good" : "bad"} 
          />
          <StatusItem 
            label="Security.txt" 
            value={data.security.securityTxt ? "存在する" : "存在しない"} 
            status={data.security.securityTxt ? "good" : "bad"} 
          />
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="server" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard title="サーバー情報">
          <StatusItem 
            label="ステータス" 
            value="オンライン" 
            status={data.serverInfo.status ? "good" : "bad"} 
          />
          <ListItem label="応答時間" value={data.serverInfo.responseTime} />
          
          <div className="space-y-2 mt-4">
            <h4 className="font-semibold">開いているポート:</h4>
            <div className="flex flex-wrap gap-2">
              {data.serverInfo.openPorts.map((port, index) => (
                <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                  {port}
                </span>
              ))}
            </div>
          </div>
        </ResultCard>
        
        <ResultCard title="リダイレクト">
          <ListItem 
            label="リダイレクト" 
            value={`ホストに接続する際に${data.redirects.count}つのリダイレクトに従いました`} 
          />
        </ResultCard>
        
        <ResultCard title="Cookie">
          <ListItem label="NEXT_LOCALE" value={data.cookies.nextLocale} />
          <ListItem label="cf_bm" value={data.cookies.cfBm} />
        </ResultCard>
      </TabsContent>
      
      <TabsContent value="other" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard title="アーカイブ履歴">
          <ListItem label="初回スキャン" value={data.archiveHistory.firstScan} />
          <ListItem label="最終スキャン" value={data.archiveHistory.lastScan} />
          <ListItem label="スキャン合計" value={data.archiveHistory.totalScans.toString()} />
          <ListItem label="変更回数" value={data.archiveHistory.changeCount.toString()} />
          <ListItem label="平均サイズ" value={data.archiveHistory.avgSize} />
          <ListItem label="スキャン間の平均日数" value={data.archiveHistory.avgDaysBetweenScans.toString()} />
        </ResultCard>
        
        <ResultCard title="ブロックリスト">
          <StatusItem 
            label="ブロックリスト状態" 
            value="リストされているサービスではブロックされていません" 
            status="good" 
          />
        </ResultCard>
        
        <ResultCard title="分析ツール">
          <div className="grid grid-cols-2 gap-2">
            <a 
              href="https://virustotal.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              VirusTotal
            </a>
            <a 
              href="https://archive.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              Archive.org
            </a>
            <a 
              href="https://sitecheck.sucuri.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              Sucuri SiteCheck
            </a>
            <a 
              href="https://ssl.labs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              SSL Labs Test
            </a>
            <a 
              href="https://shodan.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              Shodan
            </a>
            <a 
              href="https://urlscan.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-tiffany text-white py-2 px-3 rounded text-center text-sm hover:bg-tiffany-dark"
            >
              URLScan
            </a>
          </div>
        </ResultCard>
      </TabsContent>
    </Tabs>
  );
}
