import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Leaf,
  Store,
  TrendingUp,
  Heart,
  Sparkles,
  Users,
  Video,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
} from 'lucide-react';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = containerRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef}>
      <style jsx>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[90vh] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(25 20% 40%) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
          <div className="max-w-3xl">
            <div className="scroll-reveal">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                中式健康生活方式发起人
              </span>
            </div>
            <h1 className="scroll-reveal font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
              恒宁老师
            </h1>
            <div className="scroll-reveal mt-6 space-y-3 text-lg md:text-xl text-muted-foreground font-light">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  胡庆余堂药食同源食养膏全国五星
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  AI+大健康实体赋能教练
                </span>
                <span className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-primary" />
                  恒宁健康生活馆连锁创始人
                </span>
              </div>
            </div>
            <p className="scroll-reveal mt-8 text-xl md:text-2xl text-foreground font-medium font-serif">
              "用中式生活方式养身心，
              <br />
              用连锁模式做健康事业"
            </p>
            <div className="scroll-reveal mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('#business')}
                className="px-8 py-3 h-auto text-base bg-primary hover:bg-primary/90 rounded-full"
              >
                了解健康生活方式
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="px-8 py-3 h-auto text-base rounded-full border-border hover:bg-accent"
              >
                咨询加盟合作
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <div className="aspect-[4/5] bg-accent/50 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="font-serif text-4xl text-primary">恒宁</span>
                  </div>
                  <p className="text-muted-foreground">IP形象展示区</p>
                </div>
              </div>
            </div>
            <div className="scroll-reveal">
              <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                About
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
                让国人重新过上
                <br />
                中式健康生活
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  传承中医食养文化，让中国人少吃药，多调理。
                </p>
                <p>
                  恒宁老师致力于将传统中式养生智慧与现代生活方式相结合，
                  通过科学的食养方案、系统的健康管理和可复制的连锁模式，
                  帮助更多人重获健康，实现健康事业的双重价值。
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  专业
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  权威
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  亲切
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  有文化底蕴
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Business Section */}
      <section id="business" className="py-20 md:py-28 bg-accent/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              Business
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
              三大核心业务
            </h2>
            <p className="mt-4 text-muted-foreground">
              多元布局，满足不同健康需求与事业发展方向
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="scroll-reveal group hover:-translate-y-1 transition-transform duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  中式健康生活方式
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    辟谷养生课程
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    禅修与国学修养
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    科学食养方案
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    作息与情绪管理
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="scroll-reveal group hover:-translate-y-1 transition-transform duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  实体店赋能
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    AI智能获客系统
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    私域流量运营
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    门店数字化管理
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    业绩倍增方案
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="scroll-reveal group hover:-translate-y-1 transition-transform duration-300 border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  健康生活馆连锁
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    单店盈利模型
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    全程加盟扶持
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    城市代理模式
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    供应链与培训体系
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
            {/* Products Section */}
      <section id="products" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              Products
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
              完整产品体系
            </h2>
            <p className="mt-4 text-muted-foreground">
              从引流到高利润，覆盖全生命周期健康管理
            </p>
          </div>

          <div className="space-y-6">
            {/* 引流产品 */}
            <div className="scroll-reveal">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                引流产品
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">舌诊体质检测</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        AI智能分析体质，个性化调理建议
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      ¥19-39
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">七天食养体验包</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        轻量级食养入门，体验中式调理
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      ¥99
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 体验产品 */}
            <div className="scroll-reveal">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                体验产品
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">艾灸体验</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        传统艾灸调理，改善亚健康
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      ¥99
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">食养膏调理体验</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        胡庆余堂食养膏，古法调理
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      ¥299
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 核心盈利产品 */}
            <div className="scroll-reveal">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                核心盈利产品
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-foreground">食养膏调理方案</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      3个月系统调理
                    </p>
                    <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/20">
                      ¥980-1980
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-foreground">女性调理方案</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      针对女性生理特点定制
                    </p>
                    <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/20">
                      ¥1680-2980
                    </Badge>
                  </CardContent>
                </Card>
                <Card className="border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h4 className="font-medium text-foreground">亚健康综合调理</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      全方位体质改善
                    </p>
                    <Badge className="mt-3 bg-primary/10 text-primary hover:bg-primary/20">
                      ¥2980-4980
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Content Section */}
      <section id="content" className="py-20 md:py-28 bg-accent/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              Content
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
              内容专栏
            </h2>
            <p className="mt-4 text-muted-foreground">
              三大固定栏目，传递健康智慧与经营之道
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="scroll-reveal border-l-2 border-l-primary border-y-0 border-r-0 shadow-none bg-transparent">
              <CardContent className="p-6 pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    恒宁说生活
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  健康生活方式分享，情绪与身体的关系，日常养生小贴士
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    视频号
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    抖音
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    小红书
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal border-l-2 border-l-primary border-y-0 border-r-0 shadow-none bg-transparent">
              <CardContent className="p-6 pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Store className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    恒宁说门店
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  实体店经营干货，养生馆运营技巧，客户管理与服务
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    视频号
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    公众号
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="scroll-reveal border-l-2 border-l-primary border-y-0 border-r-0 shadow-none bg-transparent">
              <CardContent className="p-6 pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    恒宁说事业
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  健康事业发展路径，连锁模式解析，合伙人成长故事
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    视频号
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    公众号
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              Showcase
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
              旗舰店展示
            </h2>
            <p className="mt-4 text-muted-foreground">浙江旗舰店 · 沉浸式健康体验空间</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
            <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <Store className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">门店外观</p>
              </div>
            </div>
            <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <Heart className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">调理服务区</p>
              </div>
            </div>
            <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <Users className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">客户接待区</p>
              </div>
            </div>
            <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">健康讲堂</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-accent/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
              Contact
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-2">
              联系我们
            </h2>
            <p className="mt-4 text-muted-foreground">
              开启您的健康之旅，或了解加盟合作详情
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-reveal space-y-6">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                联系方式
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">电话咨询</p>
                    <p className="text-foreground font-medium">400-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">微信咨询</p>
                    <p className="text-foreground font-medium">hengninglaoshi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">总部地址</p>
                    <p className="text-foreground font-medium">浙江省杭州市</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">
                  关注我们
                </h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    视频号
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    抖音
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    小红书
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    公众号
                  </Button>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    加盟咨询
                  </h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          姓名
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder="请输入姓名"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">
                          手机号
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          placeholder="请输入手机号"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">
                        门店类型
                      </label>
                      <select className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                        <option>请选择</option>
                        <option>养生馆</option>
                        <option>美容院</option>
                        <option>理疗馆</option>
                        <option>其他</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">
                        所在城市
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        placeholder="请输入城市"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
                      提交咨询
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-serif text-lg font-semibold text-foreground">
              恒宁老师
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 恒宁健康生活馆. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
