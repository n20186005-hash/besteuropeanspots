import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图恩城堡・Thun Castle・瑞士・图恩 | 最佳欧洲景点',
  description: '探索图恩城堡，瑞士保存最完整的中世纪军事要塞之一，始建于1190年，融合罗马式与哥特式建筑风格，登顶可俯瞰图恩湖全景、古城街巷及远处雪山。',
}

export default function ThunCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '图恩城堡', href: '/attractions/thun-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">图恩城堡・Thun Castle・瑞士・图恩</h1>
          <p className="text-lg text-gray-600 mb-6">
            图恩城堡是瑞士保存最完整的中世纪军事要塞之一，始建于1190年，为伯尔尼大主教所建，被列入瑞士国家重要文化财产名录。城堡以厚重的石墙、高耸的塔楼为核心特色，融合罗马式与哥特式建筑风格，内部现为博物馆，登顶可俯瞰图恩湖全景、古城街巷及远处雪山，是感受中世纪军事文化与湖光山色交融的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              图恩城堡是瑞士保存最完整的中世纪军事要塞之一，始建于1190年，为伯尔尼大主教所建，被列入瑞士国家重要文化财产名录。城堡以厚重的石墙、高耸的塔楼为核心特色，融合罗马式与哥特式建筑风格，内部现为博物馆，登顶可俯瞰图恩湖全景、古城街巷及远处雪山，是感受中世纪军事文化与湖光山色交融的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="图恩城堡" />
                <InfoRow label="英文名称" value="Thun Castle" />
                <InfoRow label="国家" value="瑞士（Switzerland）" />
                <InfoRow label="城市" value="图恩（Thun）" />
                <InfoRow label="始建年代" value="1190年" />
              </div>
              <div className="space-y-4">
                <InfoRow label="所属区域" value="瑞士伯尔尼州，图恩湖东北岸" />
                <InfoRow label="建筑风格" value="罗马式与哥特式风格融合" />
                <InfoRow label="历史地位" value="瑞士国家重要文化财产" />
                <InfoRow label="地理特色" value="古城制高点，依山而建，俯瞰图恩湖" />
                <InfoRow label="海拔高度" value="约640米" />
              </div>
            </div>

            <div className="mt-6 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-4">开放时间</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span className="font-medium">全年开放：</span>分季节调整具体时段</p>
                <p><span className="font-medium">11月-次年3月：</span>周二至周日10:00-16:00，周一闭馆</p>
                <p><span className="font-medium">4月-10月：</span>周一至周日10:00-17:00</p>
                <p><span className="font-medium">法定节假日：</span>10:00-16:30</p>
                <p><span className="font-medium">闭馆日：</span>每年12月24日、25日及1月1日</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-4">门票信息</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">城堡博物馆单人票</h4>
                  <ul className="space-y-1">
                    <li>• 成人：11瑞士法郎</li>
                    <li>• 优惠票：9瑞士法郎</li>
                    <li>• 7-16岁儿童：4瑞士法郎</li>
                    <li>• 0-6岁儿童：免费</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">联票与优惠</h4>
                  <ul className="space-y-1">
                    <li>• 博物馆+特展：成人15瑞士法郎</li>
                    <li>• 优惠票：13瑞士法郎</li>
                    <li>• 7-16岁儿童：6瑞士法郎</li>
                    <li>• 瑞士旅行通票：免费</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-4">地址与交通</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-medium">地址：</span>Schlossberg 4, 3600 Thun, Switzerland</p>
                <p><span className="font-medium">位置：</span>图恩古城中心制高点，距湖岸步行约10分钟</p>
                <p><span className="font-medium">公共交通：</span>从因特拉肯乘火车约15分钟直达图恩火车站，步行10分钟可达；从伯尔尼乘火车约25分钟，出站步行12分钟或乘1路、3路公交至Schloss Thun站</p>
                <p><span className="font-medium">自驾：</span>从伯尔尼沿A6高速公路约30分钟，城堡周边有收费停车场</p>
                <p><span className="font-medium">游船：</span>乘坐图恩湖环湖游船在图恩码头下船，步行10分钟可达，持瑞士旅行通票免费</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                图恩城堡的历史可追溯至1190年，由当时的伯尔尼大主教伯特霍尔德五世下令修建，最初作为军事要塞，用于控制图恩湖航运、防范周边势力入侵，是中世纪伯尔尼地区重要的战略防御据点。城堡选址于古城制高点，依山傍湖，地势险要，凭借天然的地形优势，形成了易守难攻的防御体系，成为控制整个图恩湖区域的关键要塞。
              </p>
              
              <p>
                12至13世纪，城堡进行了第一次大规模扩建，增建了高达30米的圆形主塔楼、双层防御城墙及护城河，主塔楼兼具瞭望、防御与居住功能，塔楼墙体厚达2米，设有瞭望孔和射击口，站在塔顶可全方位监控湖面及周边陆地动静，是当时城堡防御体系的核心。这一时期，城堡成为伯尔尼大主教的居所之一，逐渐兼具军事防御与居住功能，内部开始增设简单的居住区域。
              </p>

              <p>
                14至16世纪，随着伯尔尼地区的政治稳定，图恩城堡的军事功能逐渐弱化，更多承担起行政与居住职能，成为伯尔尼执政官管理图恩地区的办公场所，同时也是当地贵族的居所。这一时期，城堡经历了多次修缮与改造，融入了哥特式建筑风格，增建了华丽的宴会厅、礼拜堂及贵族起居室，内部装饰逐渐精致，摆放了大量中世纪的家具、武器和艺术品，成为当时贵族生活的缩影。其中，城堡内的骑士大厅是少数保存完好的中世纪大厅之一，象征着当时的权力与荣耀，至今仍能看到当年的壁画与装饰痕迹。
              </p>

              <p>
                17至18世纪，图恩城堡的所有权多次更迭，先后由伯尔尼贵族、地方官员接管，每一位管理者都对城堡进行了不同程度的修缮，留下了各自时代的印记。1803年，瑞士联邦重组后，图恩城堡被收归公共所有，成为图恩地区的文化遗产。1884年，城堡被改造为博物馆，开始系统性地收集、展示中世纪的文物、武器、盔甲、家具及当地的历史资料，让游客得以窥见中世纪的军事文化与贵族生活场景。
              </p>

              <p>
                20世纪以来，图恩城堡经历了多次保护性修缮，严格保留了中世纪的建筑风貌，同时增设了现代化的展示设施，方便游客更直观地了解城堡的历史。近年来，城堡还新增了中世纪军事体验项目，游客可体验穿戴中世纪盔甲、使用简易武器等活动，每年夏季还会举办中世纪主题活动、古典音乐会等，让历史建筑与现代体验完美交融，进一步丰富了城堡的历史内涵与游览价值。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                图恩城堡的游览路线分为精华路线和深度路线，游客可根据自身时间安排灵活选择，两条路线均能充分感受城堡的军事底蕴、历史气息与湖光山色之美，适配不同游览需求。
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">精华路线（2-3小时）</h4>
                <p className="text-sm mb-4">适合时间紧张的游客，涵盖城堡核心精华</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>城堡前庭</strong> - 入口区域，厚重石墙和古老防御工事，可感受军事防御氛围，拍摄城堡全景初照</li>
                  <li><strong>军事博物馆展厅</strong> - 一层陈列中世纪武器、盔甲、盾牌、攻城器械等文物，了解城堡军事历史与防御体系</li>
                  <li><strong>贵族区域</strong> - 二层宴会厅、贵族起居室和礼拜堂，保留中世纪装饰风格，精致壁画、复古家具、华丽吊灯</li>
                  <li><strong>主塔楼登顶</strong> - 最高点360度俯瞰图恩湖碧蓝湖面、古城狭窄街巷及远处阿尔卑斯雪山，天气晴朗时可见少女峰</li>
                  <li><strong>城堡庭院</strong> - 种植各类绿植花卉，中世纪雕塑遗迹，感受城堡静谧与厚重</li>
                </ol>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">深度路线（4-5小时）</h4>
                <p className="text-sm mb-4">适合喜欢细致游览的游客，增加更多深度体验</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>精华路线全部内容</strong> - 包含上述所有精华景点</li>
                  <li><strong>城堡地下室</strong> - 保留中世纪地牢、粮仓和酒窖，地牢展示囚禁设施，酒窖保留古老酿酒器具</li>
                  <li><strong>临时特展厅</strong> - 定期举办中世纪文物、艺术作品等主题展览</li>
                  <li><strong>图恩古城老街区徒步</strong> - 狭窄石板路、色彩鲜艳木屋、古朴小店，充满浓郁历史氛围</li>
                  <li><strong>图恩湖畔漫步</strong> - 欣赏湖光山色，感受古城与湖泊完美交融</li>
                </ol>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">游览小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 城堡内提供多语种导览手册（含中文），入口处免费领取</li>
                  <li>• 主塔楼楼梯较陡峭，老人与儿童需谨慎前行，城堡内设无障碍设施</li>
                  <li>• 夏季游客较多，建议避开11:00-14:00高峰时段，体验更佳</li>
                  <li>• 城堡内部分区域禁止拍照，需注意现场标识，尊重文物保护规定</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                图恩城堡依山傍湖，建筑风格厚重古朴，结合周边的古城、湖泊与雪山，有多个绝佳拍照机位，无论是专业摄影师还是普通游客，都能拍出明信片级别的照片，以下是最推荐的6个机位，涵盖全景、特写与氛围感场景。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">1. 城堡主塔楼顶端</h4>
                  <p className="text-sm">
                    这是拍摄全景的最佳机位，可将整个图恩城堡、图恩古城、图恩湖及远处的雪山尽收眼底，画面层次丰富，既有中世纪城堡的厚重，又有湖光山色的柔美。建议选择晴天的上午或傍晚拍摄，上午光线柔和，能清晰展现湖面的碧蓝和古城的细节；傍晚夕阳西下，阳光将城堡染成金橙色，与湖面的倒影交相辉映，氛围感拉满，还能捕捉到日落时分的绝美光影。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">2. 城堡前庭石墙旁</h4>
                  <p className="text-sm">
                    适合拍摄城堡的局部特写，以厚重的石墙、高耸的塔楼为背景，前景搭配庭院内的绿植或中世纪雕塑，既能展现城堡的军事质感，又能增添画面的层次感。建议采用仰拍角度，突出城堡的宏伟气势，石墙上的射击口和瞭望孔可作为细节点缀，让照片更具历史感。
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">3. 图恩古城观景台</h4>
                  <p className="text-sm">
                    位于古城中心的高处，距离城堡步行5分钟可达，这里是俯瞰城堡与古城同框的绝佳位置，可拍摄到城堡矗立在古城制高点、周边环绕着彩色木屋的画面，完美展现“古堡藏古城”的独特景致。建议使用广角镜头拍摄，捕捉古城的全貌与城堡的雄姿，远处的雪山作为背景，让画面更具立体感。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">4. 图恩湖游船之上</h4>
                  <p className="text-sm">
                    乘坐游船游览图恩湖时，可在船上拍摄城堡的侧面全景，城堡依山而建，矗立在湖畔高处，背景是翠绿的山坡和远处的雪山，湖面波光粼粼，游船移动过程中，可捕捉到不同角度的城堡美景。建议选择游船的左侧座位，拍摄角度最佳，避免逆光拍摄，清晨或傍晚拍摄，还能捕捉到湖面的晨雾或晚霞，氛围感更佳。
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">5. 城堡礼拜堂窗口</h4>
                  <p className="text-sm">
                    位于城堡二层礼拜堂内，透过彩色玻璃窗拍摄城堡庭院或远处的湖景，光线透过玻璃窗洒入，形成柔和的光影，既能拍出礼拜堂的精致，又能将城堡与湖景巧妙融合，画面温柔又有质感，适合拍摄氛围感照片。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 图恩湖畔步道</h4>
                  <p className="text-sm">
                    距离城堡步行10分钟可达，这里是拍摄城堡远景的绝佳位置，以碧蓝的湖面为前景，城堡矗立在高处，背景是连绵的雪山，构图简洁优美，既能拍出城堡的雄姿，又能展现湖光山色的绝美。建议选择上午拍摄，光线充足，能清晰展现城堡的轮廓和湖面的澄澈，适合拍摄全景或人物与城堡的合影。
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">拍照小贴士</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 夏季光线较强，建议携带遮阳帽和防晒霜，避免强光直射镜头</li>
                  <li>• 傍晚拍摄时，可携带三脚架，保证画面清晰</li>
                  <li>• 城堡内的文物、彩绘玻璃等区域禁止拍照，需严格遵守现场标识</li>
                  <li>• 拍摄古城与城堡同框时，可避开人群，选择清晨或傍晚，让画面更简洁</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                图恩城堡位于图恩古城中心，周边景点丰富，涵盖湖景、古城、自然景观与人文场馆，距离较近，交通便捷，可在游览城堡的同时，顺路游览，感受图恩及周边的独特魅力，丰富行程体验。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1. 图恩湖</h4>
                  <p className="text-sm">
                    距离图恩城堡步行10分钟可达，是瑞士阿勒河支流之一，湖面碧蓝清澈，周边群山环绕，是瑞士最美丽的湖泊之一。游客可乘坐环湖游船，从水上欣赏图恩城堡和湖边风光，游船沿途会经过多个小镇和城堡，其中从图恩坐船到施皮茨全程约1小时，沿途可欣赏到雪山倒映在湖面的绝美景色，还可停靠奥伯霍芬城堡等景点顺路游览；也可在湖边漫步、骑行或划船，夏季还能在湖边的沙滩上游玩、游泳，湖边设有休闲座椅、餐厅等设施，适合亲子游玩和休闲放松。此外，乘坐游船还可前往圣比图斯洞穴，联合票可享受50%价格折扣，洞穴内有独特的钟乳石构造和博物馆，值得一游。
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2. 图恩古城老街区</h4>
                  <p className="text-sm">
                    位于城堡下方，距离城堡步行5分钟可达，老街区保留了中世纪的建筑风貌，狭窄的石板路、色彩鲜艳的木屋、古朴的小店，充满了历史氛围。漫步在老街区，可感受图恩古城的宁静与惬意，逛逛当地的特色手工艺品店、葡萄酒专卖店，品尝当地的特色美食，还能看到中世纪的教堂、广场等建筑，体验当地的生活节奏。
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3. 图恩历史博物馆</h4>
                  <p className="text-sm">
                    位于古城中心，距离城堡步行8分钟可达，是了解图恩地区历史的绝佳场所。博物馆内展示了从古代到现代的文物、图片、文字资料，讲述了图恩的历史变迁、军事文化、民俗风情等，其中中世纪的武器、盔甲、日常用品等展品与图恩城堡的展览相互呼应，特别适合喜欢历史的游客。
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4. 因特拉肯</h4>
                  <p className="text-sm">
                    距离图恩约15分钟火车车程，是瑞士著名的旅游小镇，有“瑞士旅游之心”的美誉，是前往少女峰、艾格峰、僧侣峰的必经之地。小镇坐落在图恩湖和布里恩茨湖之间，湖光山色相映成趣，周边有许多徒步路线和户外体验项目，如跳伞、滑翔伞等，游客可在游览城堡后，前往因特拉肯，感受阿尔卑斯山的壮美风光。
                  </p>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2">5. 奥伯霍芬城堡</h4>
                  <p className="text-sm">
                    距离图恩约10分钟火车车程，坐落在图恩湖畔，与图恩城堡风格迥异，更具田园气息。城堡始建于13世纪，保留了中世纪的建筑风貌，内部现为博物馆，庭院内种植着大片花卉和绿植，是一座“花园式城堡”，游客可参观城堡内部，漫步庭院，欣赏湖景，感受不一样的城堡风情。
                  </p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">6. 尼森山</h4>
                  <p className="text-sm">
                    距离图恩约20分钟车程，呈金字塔形，是图恩当地的标志性山脉。可乘坐怀旧缆车登上山顶，山顶观景台可360度俯瞰图恩湖、图恩小镇和周边的雪山，景色壮丽，是徒步和观景的绝佳地点，适合喜欢户外体验的游客，登顶后还能体验山顶餐厅，一边品尝美食，一边欣赏美景。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                图恩作为瑞士伯尔尼州的重要旅游城市，住宿选择丰富，从高端湖景酒店到经济型民宿应有尽有，游客可根据自身预算和需求选择合适的住宿，以下是详细的住宿小贴士，帮助游客更好地安排行程，提升游览体验。
              </p>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">住宿区域推荐</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">城堡周边或古城内（推荐）</h5>
                    <p className="text-sm">
                      首选城堡周边或古城内，距离城堡和古城景点较近，步行即可到达，方便游览城堡和古城，还能感受古城的历史氛围，清晨和傍晚可漫步在古城街巷，体验当地的宁静与惬意。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">图恩湖畔区域</h5>
                    <p className="text-sm">
                      其次可选择图恩湖畔区域，距离湖边较近，可欣赏湖景，步行15分钟左右可达城堡，适合喜欢湖景的游客。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">图恩火车站附近</h5>
                    <p className="text-sm">
                      如果预算有限，可选择图恩火车站附近，交通便捷，适合需要乘坐火车前往周边景点的游客，火车站附近有许多餐厅和小店，生活便利。
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
                      高端酒店以湖景度假型为主，多位于湖畔或古城高处，距离城堡和核心景点较近，通常自带全景餐厅、SPA、户外露台等配套设施，房间多为湖景或山景房，推窗即可欣赏湖光山色，早餐丰富，体验感极佳。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">中端酒店</h5>
                    <p className="text-sm">
                      中端酒店多位于古城内或火车站附近，步行可达核心景点，房间干净整洁，部分房型可欣赏古城或湖景，价格适中，性价比突出。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-2">经济型民宿</h5>
                    <p className="text-sm">
                      经济型住宿可选择当地的民宿，图恩的民宿多为家庭经营，风格温馨，设施齐全，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，适合预算有限的游客或家庭游客。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">预订建议</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 图恩的旅游旺季为每年6-8月和10月，这段时间游客较多，住宿需求量大，建议提前1-2个月预订，避免出现无房或价格上涨的情况</li>
                  <li>• 淡季（11月至次年5月）游客较少，可提前1-2周预订，价格相对实惠，部分酒店还会推出优惠活动</li>
                  <li>• 预订时可查看酒店或民宿的评价，重点关注交通便利性、卫生情况和景观效果，根据自身需求选择合适的住宿</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-4">注意事项</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 瑞士的住宿价格普遍较高，包含早餐的住宿性价比更高，建议优先选择含早餐的房型</li>
                  <li>• 大部分酒店和民宿不提供一次性洗漱用品，游客需自带牙刷、牙膏、拖鞋等用品</li>
                  <li>• 酒店和民宿的入住时间通常为14:00以后，退房时间为11:00以前，如需提前入住或延迟退房，需提前与酒店沟通，可能会产生额外费用</li>
                  <li>• 图恩古城夜间非常安静，游客需注意保持安静，避免影响他人休息</li>
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
                    <li>• ATM机：古城中心及火车站均有，支持银联卡取现</li>
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