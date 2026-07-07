import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Users, Sparkles, CheckCircle, Target, GraduationCap, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-1 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl card-hover">
                  <img src="https://oaidalleprodsouthcentralus.blob.core.windows.net/1632042206824142856720165807914284234293/2026-07-07%2015%3A11%3A12/dall-e_2024_07_07_1511_2024_163411284256.png" alt="طالب سعودي" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 card-hover">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center"><Sparkles className="h-6 w-6 text-primary" /></div>
                  <div><p className="text-sm font-bold text-foreground">مدعوم بالذكاء الاصطناعي</p><p className="text-xs text-muted-foreground">للمنهج السعودي</p></div>
                </div>
              </div>
              <div className="space-y-6 order-2 md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="h-4 w-4" /><span>أول منصة ذكاء اصطناعي سعودية للتعليم</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">وداعاً للرسوب.<br /><span className="text-primary">أهلاً بالدرجات العالية</span></h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">فزعة AI يحل لك أي سؤال في الرياضيات والفيزياء والكيمياء بالخطوات + يشرحلك باللهجة السعودية</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 h-14 card-hover">جرب مجاناً الآن</Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 h-14 gap-2 card-hover"><PlayCircle className="h-5 w-5" />شاهد كيف يعمل</Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-5 w-5 text-primary" /><span>مجاني تماماً</span></div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-5 w-5 text-primary" /><span>بدون بطاقة ائتمان</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3 p-6 card-hover">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center"><CheckCircle className="h-8 w-8 text-primary" /></div>
                <div><p className="text-4xl md:text-5xl font-bold text-primary mb-2">500,000+</p><p className="text-lg font-medium text-foreground">سؤال تم حله</p><p className="text-sm text-muted-foreground">بواسطة طلاب سعوديين</p></div>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 border-r border-l border-border card-hover">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center"><Target className="h-8 w-8 text-primary" /></div>
                <div><p className="text-4xl md:text-5xl font-bold text-primary mb-2">99.3%</p><p className="text-lg font-medium text-foreground">دقة في الحلول</p><p className="text-sm text-muted-foreground">مع شرح خطوة بخطوة</p></div>
              </div>
              <div className="flex flex-col items-center text-center space-y-3 p-6 card-hover">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center"><GraduationCap className="h-8 w-8 text-primary" /></div>
                <div><p className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</p><p className="text-lg font-medium text-foreground">طالب سعودي</p><p className="text-sm text-muted-foreground">يثقون في فزعة الذكاء</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا فزعة الذكاء؟</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">نقدم حلولاً ذكية مصممة خصيصاً للمنهج السعودي</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "ذكاء اصطناعي متقدم", desc: "نماذج ذكاء اصطناعي مدربة على المنهج السعودي" },
                { icon: BookOpen, title: "منهج سعودي معتمد", desc: "متوافق تماماً مع المناهج الدراسية المعتمدة" },
                { icon: Users, title: "دعم المعلمين", desc: "أدوات متقدمة لمساعدة المعلمين في تحسين التعليم" },
                { icon: Sparkles, title: "تجربة متميزة", desc: "واجهة سهلة الاستخدام مصممة للطلاب والمعلمين" }
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all card-hover">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><item.icon className="h-6 w-6 text-primary" /></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">جاهز لتطوير العملية التعليمية؟</h2>
              <p className="text-xl opacity-90">انضم إلى مئات المدارس والمعلمين الذين يستخدمون فزعة الذكاء</p>
              <Button size="lg" variant="secondary" className="text-lg px-8 card-hover">ابدأ تجربتك المجانية</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
