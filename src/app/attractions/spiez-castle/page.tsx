import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施皮茨城堡・Spiez Castle・瑞士・施皮茨 | 最佳欧洲景点',
  description: '探索施皮茨城堡，瑞士保存最完好的中世纪城堡之一，始建于933年，融合哥特式、文艺复兴与巴洛克建筑风格，坐落于图恩湖畔半岛之上，登顶可俯瞰碧蓝湖景、连绵雪山与梯田葡萄园。',
}

export default function SpiezCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '施皮茨城堡', href: '/attractions/spiez-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">施皮茨城堡・Spiez Castle・瑞士・施皮茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            施皮茨城堡是瑞士保存最完好的中世纪城堡之一，始建于933年，主体结构形成于12至18世纪的多次扩建，被列入瑞士国家重要文化财产名录。城堡坐落于图恩湖畔半岛之上，融合哥特式、文艺复兴与巴洛克建筑风格，内部现为博物馆，登顶可俯瞰碧蓝湖景、连绵雪山与梯田葡萄园，是自然与人文完美交融的典范。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              施皮茨城堡是瑞士保存最完好的中世纪城堡之一，始建于933年，主体结构形成于12至18世纪的多次扩建，被列入瑞士国家重要文化财产名录。城堡坐落于图恩湖畔半岛之上，融合哥特式、文艺复兴与巴洛克建筑风格，内部现为博物馆，登顶可俯瞰碧蓝湖景、连绵雪山与梯田葡萄园，是自然与人文完美交融的典范。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="施皮茨城堡" />
                <InfoRow label="英文名称" value="Spiez Castle" />
                <InfoRow label="国家" value="瑞士（Switzerland）" />
                <InfoRow label="城市" value="施皮茨（Spiez）" />
                <InfoRow label="所属区域" value="瑞士伯尔尼州，图恩湖西南岸" />
              </div>
              <div className="space-y-4">
                <InfoRow label="始建年代" value="933年" />
                <InfoRow label="建筑风格" value="哥特式、文艺复兴与巴洛克风格融合" />
                <InfoRow label="历史地位" value="瑞士国家重要文化财产" />
                <InfoRow label="地理特色" value="坐落于图恩湖畔半岛，三面环水" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">开放季节：</span>仅每年5月1日至10月31日对外开放</p>
                <p><span className="font-medium">5-6月、9-10月：</span>周二至周日10:00-17:00，周一14:00-17:00</p>
                <p><span className="font-medium">7-8月旺季：</span>周二至周日及周一10:00-18:00</p>
                <p><span className="font-medium">法定节假日：</span>10:00-17:00</p>
                <p><span className="font-medium">闭馆期：</span>11月1日至次年4月30日</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">城堡博物馆单人票</h4>
                  <ul className="space-y-1">
                    <li>• 成人：12瑞士法郎</li>
                    <li>• 优惠票：10瑞士法郎</li>
                    <li>• 6-16岁儿童：5瑞士法郎</li>
                    <li>• 0-6岁儿童：免费</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">联票与优惠</h4>
                  <ul className="space-y-1">
                    <li>• 博物馆+艺术特展：成人16瑞士法郎</li>
                    <li>• 家庭票A：20瑞士法郎（1成人+最多4儿童）</li>
                    <li>• 家庭票B：30瑞士法郎（2成人+最多4儿童）</li>
                    <li>• 瑞士旅行通票持有者：免费</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Schlossstrasse 16, 3700 Spiez, Switzerland</p>
                <p><span className="font-medium">海拔：</span>628米，距湖岸仅50米，三面环水</p>
                <p><span className="font-medium">公共交通：</span>从因特拉肯乘火车约20-24分钟直达施皮茨火车站，步行15分钟可达；或乘B61路邮政巴士3分钟抵达</p>
                <p><span className="font-medium">自驾：</span>从伯尔尼沿A6高速公路约35分钟，城堡周边有收费停车场</p>
                <p><span className="font-medium">游船：</span>乘坐图恩湖环湖游船在施皮茨码头下船，步行5分钟可达，持瑞士旅行通票免费</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                施皮茨城堡的历史可追溯至公元933年，最早作为防御工事出现在历史文献中，彼时它是中世纪瑞士伯尔尼地区重要的军事要塞，凭借三面环水的地形优势，成为控制图恩湖航运和周边区域的战略要地。12世纪，城堡进行了第一次大规模扩建，增建了高达28米的方形主塔楼和双层盾墙，形成了完整的军事防御体系，主塔楼兼具瞭望和防御功能，站在塔顶可全方位监控周边的湖面和陆地动静，盾墙上的瞭望孔则为防御者提供了绝佳的射击视角。
              </p>
              
              <p>
                中世纪盛期至18世纪，施皮茨城堡经历了多次扩建与改造，逐渐从军事要塞转变为贵族居所。13世纪，城堡成为伯尔尼执政官的夏宫，因此不再侧重防御功能，转而增加了居住和休闲区域，内部装饰也逐渐变得精致。文艺复兴时期，城堡增建了舒适的居住区，融入了当时流行的建筑美学；巴洛克时期，又对城堡的外观和内部进行了装饰性改造，形成了如今融合哥特式、文艺复兴与巴洛克风格的独特建筑风貌，其东立面的门窗排列还形成了形似汉字“囧”的独特造型，成为游客津津乐道的细节。
              </p>

              <p>
                城堡的领主曾多次更迭，从最初的地方贵族，到伯尔尼执政官，再到后来的私人家族，每一位主人都对城堡进行了不同程度的修缮和改造，留下了各自时代的印记。城堡庭院南端有一座建于公元762年的小教堂，兼具早期罗马式和伯尔尼乡村风格，与城堡一同见证了施皮茨小镇的千年变迁，教堂内的壁画和雕塑至今保存完好，承载着浓厚的宗教文化气息。
              </p>

              <p>
                1929年，施皮茨城堡正式归公共所有，由施皮茨文化遗产基金会负责运营管理。此后，城堡被改造为博物馆，地下一层保留了中世纪地窖的原貌，二层以上则展示了城堡历届主人的遗物、古代家具、16世纪的挂毯、古老的武器和盔甲等文物，让游客得以窥见中世纪贵族的生活场景。近年来，城堡还增设了虚拟现实头盔体验项目，让游客能够更直观地感受中世纪的生活氛围，每年夏季，这里还会举办古典音乐会和主题艺术展览，让历史建筑与现代艺术完美交融。2010年代的考古发现还证实，这里曾是中世纪骑士马上枪术比赛的场地，进一步丰富了城堡的历史内涵。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                施皮茨城堡的游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能感受城堡的历史底蕴与湖光山色之美。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖城堡核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>城堡前庭</strong> - 入口区域，两侧花园与古老石墙，可拍摄城堡全景初照</li>
                  <li><strong>博物馆主展厅</strong> - 一层陈列中世纪武器、盔甲、家具和日常用品，了解城堡历史变迁</li>
                  <li><strong>贵族起居室与宴会厅</strong> - 二层文艺复兴与巴洛克装饰风格，感受贵族生活奢华场景</li>
                  <li><strong>主塔楼登顶</strong> - 最高点俯瞰图恩湖、葡萄园与伯尔尼阿尔卑斯山脉，天气晴朗时可见少女峰</li>
                  <li><strong>城堡花园</strong> - 种植各类花卉绿植，小型喷泉与雕塑，感受城堡静谧雅致</li>
                </ol>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>城堡地下室葡萄酒窖</strong> - 保留中世纪酒罐与酿酒器具，了解瑞士葡萄酒酿造历史，部分时段可品尝当地白葡萄酒</li>
                  <li><strong>城堡庭院南端古老教堂</strong> - 参观教堂内壁画、雕塑与祭坛，感受浓厚宗教文化气息</li>
                  <li><strong>周边葡萄园小径徒步</strong> - 沿山坡分布的葡萄园梯田，绿意盎然，与雪山湖泊相互映衬，徒步约1小时</li>
                  <li><strong>小镇街区漫步</strong> - 返回城堡附近，逛当地特色小店，感受施皮茨小镇田园风情</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 城堡内提供多语种导览手册（含中文），入口处免费领取</li>
                  <li>• 主塔楼楼梯较陡峭，老人与儿童需谨慎前行，城堡内设无障碍设施</li>
                  <li>• 夏季游客较多，建议避开10:30-15:00高峰时段，体验更佳</li>
                  <li>• 部分区域禁止拍照或需关闭闪光灯，需遵守现场提示</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                施皮茨城堡的每一处角落都充满了中世纪的美感，结合周边的湖光山色，有多个绝佳拍照机位，无论是专业摄影师还是普通游客，都能拍出明信片级别的照片，以下是最推荐的6个机位：
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">1. 城堡主塔楼顶端</h4>
                  <p className="text-sm">
                    这是拍摄全景的最佳机位，可将整个施皮茨城堡、图恩湖、葡萄园和远处的雪山尽收眼底，建议选择晴天的上午或傍晚拍摄，上午光线柔和，能清晰展现湖面的碧蓝和城堡的细节；傍晚夕阳西下，阳光将城堡染成金橙色，与湖面的倒影交相辉映，氛围感拉满，还能捕捉到日落时分的绝美光影。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">2. 城堡花园喷泉旁</h4>
                  <p className="text-sm">
                    适合拍摄城堡的局部特写，以城堡的石墙、塔楼为背景，前景搭配花园内的花卉、喷泉，既能展现城堡的中世纪质感，又能增添画面的灵动性，建议采用仰拍角度，突出城堡的宏伟气势，春季和夏季花卉盛开时，拍摄效果更佳。
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">3. 施皮茨火车站观景台</h4>
                  <p className="text-sm">
                    从火车站中间出口出来向右走几步即可到达，这里是俯瞰整个施皮茨小镇和城堡的绝佳位置，可拍摄到城堡与小镇民居、图恩湖的全景，画面层次丰富，远处的雪山作为背景，能完美展现施皮茨“湖光、山色、古堡、小镇”的田园画卷，建议使用广角镜头拍摄，捕捉更广阔的视野。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">4. 图恩湖游船之上</h4>
                  <p className="text-sm">
                    乘坐游船游览图恩湖时，可在船上拍摄城堡的侧面全景，城堡矗立在湖畔半岛之上，三面环水，湖面波光粼粼，背景是连绵的雪山，游船移动过程中，可捕捉到不同角度的城堡美景，建议选择游船的右侧座位，拍摄角度最佳，避免逆光拍摄。
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">5. 教堂旁网红长椅</h4>
                  <p className="text-sm">
                    位于城堡附近的圣马蒂亚斯教堂旁的斜坡上，是拍摄城堡与湖景完美构图的绝佳位置，坐在长椅上，以城堡为背景，湖面和雪山为远景，既能拍出人物与古堡的氛围感照片，也能单独拍摄城堡的远景，构图简洁优美，是游客必打卡的机位。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 葡萄园小径高处</h4>
                  <p className="text-sm">
                    从小镇出发，走进葡萄园小径，在山坡高处回望城堡，可拍摄到城堡与葡萄园、湖景的结合画面，翠绿的葡萄藤、古朴的城堡、碧蓝的湖面，构成一幅绝美的田园画卷，建议选择上午拍摄，光线充足，能清晰展现葡萄藤的细节和城堡的轮廓。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季光线较强，建议携带遮阳帽和防晒霜，避免强光直射镜头</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 城堡内部分区域禁止拍照，需注意现场标识，尊重文物保护规定</li>
                  <li>• 拍摄当地工作人员或居民时，需提前征得对方同意，尊重当地风俗习惯</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                施皮茨城堡周边景点丰富，涵盖湖景、小镇、古城和自然景观，距离较近，交通便捷，可在游览城堡的同时，顺路游览，感受施皮茨及周边的独特魅力。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1. 图恩湖</h4>
                  <p className="text-sm">
                    距离施皮茨城堡仅50米，是瑞士阿勒河支流之一，湖面碧蓝清澈，周边群山环绕，是瑞士最美丽的湖泊之一。游客可乘坐环湖游船，从水上欣赏施皮茨城堡和湖边风光，游船沿途会经过多个小镇和城堡，其中从施皮茨坐船到图恩全程约1小时，沿途可欣赏到雪山倒映在湖面的绝美景色；也可在湖边漫步、骑行或划船，夏季还能在湖边的沙滩上游玩、游泳，湖边设有迷你高尔夫球场、儿童游乐园等设施，适合亲子游玩和休闲放松。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2. 施皮茨小镇老街区</h4>
                  <p className="text-sm">
                    位于城堡下方，距离城堡步行10分钟可达，老街区保留了中世纪的建筑风貌，狭窄的石板路、色彩鲜艳的木屋、古朴的小店，充满了田园气息。漫步在老街区，可感受施皮茨小镇的宁静与惬意，逛逛当地的特色手工艺品店、葡萄酒专卖店，品尝当地的特色美食，如芝士火锅、苹果派等，体验当地的生活节奏。
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3. 葡萄酒酿造历史博物馆</h4>
                  <p className="text-sm">
                    位于施皮茨城堡内，是了解瑞士葡萄酒历史的绝佳场所，博物馆内展示了从古代到现代的酿酒器具、葡萄酒藏品，还有详细的文字和图片介绍，讲述瑞士葡萄酒的酿造历史和发展历程，特别适合带娃游客，可让孩子亲自体验葡萄酒的制作过程，感受酿酒文化的魅力。
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4. 因特拉肯</h4>
                  <p className="text-sm">
                    距离施皮茨约20分钟火车车程，是瑞士著名的旅游小镇，有“瑞士旅游之心”的美誉，是前往少女峰、艾格峰、僧侣峰的必经之地。小镇坐落在图恩湖和布里恩茨湖之间，湖光山色相映成趣，周边有许多徒步路线和户外体验项目，如跳伞、滑翔伞等，游客可在游览城堡后，前往因特拉肯，感受阿尔卑斯山的壮美风光。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">5. 图恩古城</h4>
                  <p className="text-sm">
                    距离施皮茨约15分钟车程，是一座历史悠久的中世纪古城，城内保留了许多中世纪的建筑和狭窄的街道，其中图恩城堡是古城的标志性建筑，与施皮茨城堡风格迥异，更具军事防御特色。古城内还有博物馆、教堂、广场等景点，逛逛古城的老街区，可感受中世纪的历史氛围，品尝当地的特色美食，是休闲放松的好去处。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 尼森山</h4>
                  <p className="text-sm">
                    是施皮茨的当地山脉，呈金字塔形，距离城堡不远，可乘坐怀旧缆车登上山顶，山顶观景台可360度俯瞰图恩湖、施皮茨小镇和周边的雪山，景色壮丽，是徒步和观景的绝佳地点，适合喜欢户外体验的游客。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                施皮茨小镇不大，但住宿选择丰富，从高端湖景酒店到经济型民宿应有尽有，游客可根据自身预算和需求选择合适的住宿，以下是详细的住宿小贴士，帮助游客更好地安排行程。
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">城堡附近或湖边区域（推荐）</h5>
                    <p className="text-sm">
                      首选城堡附近或湖边区域，距离城堡和图恩湖较近，步行即可到达，方便游览城堡和湖边景点，还能欣赏到湖景和城堡美景，清晨和傍晚可漫步在湖边，感受小镇的宁静与惬意。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">施皮茨火车站附近</h5>
                    <p className="text-sm">
                      其次可选择施皮茨火车站附近，交通便捷，适合需要乘坐火车前往周边景点的游客，火车站附近有许多餐厅和小店，生活便利。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">小镇边缘民宿</h5>
                    <p className="text-sm">
                      如果预算有限，可选择小镇边缘的民宿，价格相对实惠，环境安静，也能便捷到达城堡和小镇中心。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">住宿类型选择</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">高端湖景酒店</h5>
                    <p className="text-sm">
                      高端酒店以湖景度假型为主，多位于小镇山坡或湖边，距离火车站和城堡均较近，部分可提供行李免费接送服务，通常自带酒庄、全景泳池、SPA等配套设施，房间多为湖景或山景房，早餐丰富且设有特色餐厅，体验感极佳。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">中端酒店</h5>
                    <p className="text-sm">
                      中端酒店多靠近湖边或城堡周边，步行可达核心景点，房间干净整洁，部分房型可欣赏湖景，价格适中，性价比突出。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">经济型民宿</h5>
                    <p className="text-sm">
                      经济型住宿可选择当地的民宿，施皮茨的民宿多为家庭经营，风格温馨，设施齐全，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，适合预算有限的游客或家庭游客。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">预订建议</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 施皮茨的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（5月、9月）游客较少，可提前1-2周预订，价格相对实惠</li>
                  <li>• 预订时可查看酒店或民宿的评价，重点关注交通便利性、卫生情况和景观效果，根据自身需求选择合适的住宿</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-4">注意事项</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 瑞士的住宿价格普遍较高，包含早餐的住宿性价比更高，建议优先选择含早餐的房型</li>
                  <li>• 大部分酒店和民宿不提供一次性洗漱用品，游客需自带牙刷、牙膏、拖鞋等用品</li>
                  <li>• 酒店和民宿的入住时间通常为14:00以后，退房时间为11:00以前，如需提前入住或延迟退房，需提前与酒店沟通，可能会产生额外费用</li>
                  <li>• 施皮茨小镇夜间非常安静，游客需注意保持安静，避免影响他人休息</li>
                  <li>• 持有瑞士旅行通票的游客，部分酒店可享受优惠，预订时可提前咨询酒店</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="8. 实用信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">紧急联系</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 欧洲统一紧急电话：112</li>
                    <li>• 瑞士警察：117</li>
                    <li>• 医疗急救：144</li>
                    <li>• 消防：118</li>
                    <li>• 瑞士旅游热线：+41 31 328 12 12</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">货币与支付</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 当地货币：瑞士法郎（CHF）</li>
                    <li>• 汇率参考：1欧元≈1.05瑞士法郎（2025年参考）</li>
                    <li>• 支付方式：现金、信用卡普遍接受，部分地方支持移动支付</li>
                    <li>• ATM机：小镇中心及火车站均有，支持银联卡取现</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">语言与沟通</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 官方语言：德语（瑞士德语方言）</li>
                    <li>• 旅游区英语：基本通行，酒店与景点工作人员普遍会英语</li>
                    <li>• 常用短语：Grüezi（你好）、Merci vilmal（非常感谢）</li>
                    <li>• 导览服务：城堡提供多语言导览（含英语、德语）</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">其他实用信息</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 电压：230V，插头为Type J型（瑞士标准）</li>
                    <li>• 时区：中欧时间（CET），UTC+1</li>
                    <li>• 饮用水：自来水可直接饮用，水质优良</li>
                    <li>• 网络：大部分酒店与餐厅提供免费WiFi，部分公共场所也有免费WiFi</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}