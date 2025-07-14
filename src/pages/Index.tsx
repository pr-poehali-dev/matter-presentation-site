import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dusty-beige via-mystic-cream to-dusty-rose">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <img 
                src="/img/9cfefa8f-7754-4372-84b0-6f8c599b6e82.jpg" 
                alt="Mystical feminine energy" 
                className="w-96 h-96 object-cover rounded-full animate-pulse"
              />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-dusty-earth mb-6 relative z-10">
              Материя
            </h1>
            <p className="text-xl md:text-2xl text-dusty-sage font-light max-w-3xl mx-auto leading-relaxed">
              Практикум обретения гармонии в жизни и улучшения связи с материальным миром через исцеление отношений с материнским началом
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-6 mt-12">
            <Icon name="Moon" size={32} className="text-dusty-sage opacity-60" />
            <Icon name="Flower" size={32} className="text-dusty-sage opacity-60" />
            <Icon name="Heart" size={32} className="text-dusty-sage opacity-60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-mystic-cream/80 backdrop-blur-sm border-dusty-sage/20 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-4xl text-dusty-earth mb-4">
                О практикуме
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-dusty-sage text-lg leading-relaxed">
              <div className="text-center font-light">
                <p className="mb-4">
                  <strong className="text-dusty-earth">МАМА</strong> - это врата, через которые вы пришли в этот мир. 
                  Абсолютно каждый из нас.
                </p>
                <p className="mb-4">
                  Не важно, какие у вас отношения с мамой сейчас, не важно жива она или нет, 
                  не важно мужчина вы или женщина.
                </p>
                <p className="mb-6">
                  Мы не будем разговаривать про то, кто такая мама, как быть мамой, 
                  как взаимодействовать с мамой. Мы будем это проживать и трансформировать 
                  в силу прямо во время практикума.
                </p>
              </div>
              
              <div className="bg-dusty-beige/50 p-6 rounded-lg">
                <p className="text-dusty-earth font-medium mb-3">
                  Материнский аспект - это ткань Мироздания, это фундамент вашего взаимодействия с материальным миром.
                </p>
                <p>
                  Это про то, как вы живете в этом мире, насколько прочно вы стоите на ногах 
                  или просто существуете в нем.
                </p>
              </div>
              
              <p className="text-center font-medium">
                Мы будем глубинно прорабатывать ваше базовое соединение с материей, 
                которое произошло у вас через вашу маму.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-dusty-earth text-center mb-12">
            Как проходит практикум
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-mystic-pink/60 backdrop-blur-sm border-dusty-sage/20 text-center">
              <CardHeader>
                <Icon name="MessageSquare" size={48} className="text-dusty-sage mx-auto mb-4" />
                <CardTitle className="font-serif text-xl text-dusty-earth">
                  Закрытый канал
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dusty-sage">
                  Практикум проходит в закрытом Telegram-канале с обратной связью автора
                </p>
              </CardContent>
            </Card>

            <Card className="bg-mystic-pink/60 backdrop-blur-sm border-dusty-sage/20 text-center">
              <CardHeader>
                <Icon name="Users" size={48} className="text-dusty-sage mx-auto mb-4" />
                <CardTitle className="font-serif text-xl text-dusty-earth">
                  Чат участников
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dusty-sage">
                  Общение с единомышленниками и поддержка на пути трансформации
                </p>
              </CardContent>
            </Card>

            <Card className="bg-mystic-pink/60 backdrop-blur-sm border-dusty-sage/20 text-center">
              <CardHeader>
                <Icon name="Infinity" size={48} className="text-dusty-sage mx-auto mb-4" />
                <CardTitle className="font-serif text-xl text-dusty-earth">
                  Без ограничений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dusty-sage">
                  Доступ без ограничения по времени к материалам и поддержке
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-dusty-earth text-center mb-12">
            Что вы получите
          </h2>
          
          <Card className="bg-mystic-cream/80 backdrop-blur-sm border-dusty-sage/20 shadow-xl">
            <CardContent className="py-8">
              <div className="text-center">
                <p className="text-xl text-dusty-sage leading-relaxed mb-8">
                  Проходите практикум в течение месяца со мной и наблюдайте как быстро меняется:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dusty-rose flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-dusty-earth" />
                    </div>
                    <span className="text-dusty-sage text-lg">Ваша жизнь</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dusty-rose flex items-center justify-center">
                      <Icon name="DollarSign" size={24} className="text-dusty-earth" />
                    </div>
                    <span className="text-dusty-sage text-lg">Финансовое благополучие</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dusty-rose flex items-center justify-center">
                      <Icon name="Sparkles" size={24} className="text-dusty-earth" />
                    </div>
                    <span className="text-dusty-sage text-lg">Проявленность</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dusty-rose flex items-center justify-center">
                      <Icon name="HeartHandshake" size={24} className="text-dusty-earth" />
                    </div>
                    <span className="text-dusty-sage text-lg">Взаимодействие с людьми</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-dusty-rose to-mystic-pink p-8 rounded-2xl shadow-2xl">
            <h3 className="font-serif text-3xl text-dusty-earth mb-6">
              Начните путь к гармонии
            </h3>
            <p className="text-dusty-sage text-lg mb-8">
              Присоединяйтесь к практикуму и откройте новые грани своей связи с материальным миром
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-dusty-earth hover:bg-dusty-sage text-dusty-beige font-medium text-lg px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Присоединиться к практикуму
              </Button>
              
              <p className="text-dusty-sage text-sm opacity-75">
                Доступ открывается сразу после регистрации
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;