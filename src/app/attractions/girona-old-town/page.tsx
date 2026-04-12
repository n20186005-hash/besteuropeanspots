import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫罗纳古城・Girona Old Town・西班牙・赫罗纳 | 最佳欧洲景点',
  description: '探索赫罗纳古城，伊比利亚半岛的中世纪光影秘境，以保存完整的古城墙、静谧的河畔风光和独特的建筑交融之美，成为西班牙东北部最具吸引力的旅游目的地之一。',
}

export default function GironaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '赫罗纳古城', href: '/attractions/girona-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">赫罗纳古城・Girona Old Town・西班牙・赫罗纳</h1>
          <p className="text-lg text-gray-600 mb-6">
            赫罗纳古城是伊比利亚半岛保存最完整的中世纪古城之一，1994年被列入世界文化遗产，始建于古罗马时期，融合罗马式、哥特式、巴洛克式及摩尔式建筑风格。这里有欧洲保存最完好的犹太区、高耸的哥特式大教堂、蜿蜒的中世纪城墙，还是《权力的游戏》“君临城”取景地，街巷纵横、光影交错，兼具历史底蕴与影视魅力。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              赫罗纳古城是伊比利亚半岛保存最完整的中世纪古城之一，1994年被列入世界文化遗产，始建于古罗马时期，融合罗马式、哥特式、巴洛克式及摩尔式建筑风格。这里有欧洲保存最完好的犹太区、高耸的哥特式大教堂、蜿蜒的中世纪城墙，还是《权力的游戏》“君临城”取景地，街巷纵横、光影交错，兼具历史底蕴与影视魅力。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="赫罗纳古城" />
                <InfoRow label="英文名称" value="Girona Old Town" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="赫罗纳（Girona）" />
                <InfoRow label="所属区域" value="西班牙加泰罗尼亚自治区，翁达洛河河畔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="公元前3世纪伊比利亚人定居，公元前2世纪罗马征服" />
                <InfoRow label="建筑风格" value="罗马式、哥特式、巴洛克式、摩尔式融合" />
                <InfoRow label="核心景点" value="赫罗纳大教堂、犹太区、古城墙" />
                <InfoRow label="特色" value="《权力的游戏》取景地、彩色房屋、中世纪城墙" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城全天开放；核心景点夏季9:30-19:30，冬季10:00-18:00；部分景点周一闭馆" />
              <InfoRow label="门票价格" value="老城免费；大教堂成人票12欧元，犹太区博物馆6欧元，古城墙登顶5欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Casco Antiguo de Girona, 17001 Girona, Spain" />
              <InfoRow label="交通方式" value="从巴塞罗那乘高铁约30-40分钟，票价10-15欧元；火车站乘1路、4路公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                赫罗纳古城的历史可追溯至公元前3世纪，最早由伊比利亚人定居，公元前2世纪被罗马人征服，成为古罗马帝国在伊比利亚半岛东北部的重要城镇，罗马人在此修建了城墙、街道、浴场等建筑，奠定了古城的基本格局，如今老城的部分街道仍保留着古罗马时期的布局，罗马城墙遗迹也清晰可见，成为古城历史的重要印记。
              </p>
              <p>
                公元8世纪至10世纪，赫罗纳被摩尔人统治，这段时期古城经历了较大的发展，摩尔人带来了独特的建筑工艺、灌溉技术与文化元素，将伊斯兰风格与当地建筑融合，修建了大量住宅与公共设施，翁达洛河畔的部分建筑至今仍能看到摩尔式建筑的痕迹，为后续古城的建筑风格融合奠定了基础。
              </p>
              <p>
                10世纪末，基督教势力收复赫罗纳，古城开始逐步重建，宗教建筑与世俗建筑陆续兴起，逐步成为加泰罗尼亚地区重要的宗教与文化中心。11至14世纪，赫罗纳进入鼎盛时期，这段时间，赫罗纳大教堂、古城墙、犹太区等标志性建筑陆续建成，其中犹太区（El Call）成为欧洲保存最完整的犹太人聚居地之一，见证了犹太文化与基督教文化的交融共生，当时的赫罗纳不仅是宗教圣地，也是商业与学术交流的重要枢纽。
              </p>
              <p>
                15至17世纪，赫罗纳经历了文艺复兴与巴洛克时期，建筑艺术得到进一步发展，原有建筑被逐步修缮与扩建，赫罗纳大教堂的哥特式穹顶、内部壁画与雕塑得以完善，成为哥特式建筑的典范之一。这段时期，古城的商业活动持续繁荣，翁达洛河畔成为重要的贸易集散地，往来的商人带来了不同地区的文化与商品，丰富了古城的人文底蕴。
              </p>
              <p>
                1994年，赫罗纳古城被联合国教科文组织列为世界文化遗产，因其完整保留了古罗马至近代的建筑风貌，以及多元文化交融的历史底蕴，成为全球关注的历史文化胜地。近年来，因作为《权力的游戏》“君临城”“布拉佛斯”等场景的取景地，赫罗纳古城吸引了全球各地的游客前来打卡，古老的街巷与影视IP碰撞，让这座千年古城焕发了新的活力，如今，古城依然保持着千年以来的风貌，古老的建筑与现代的生活气息相互交融，成为西班牙历史与人文的鲜活载体。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从赫罗纳火车站出发，步行15分钟或乘坐1路公交抵达老城核心区域（大教堂站），首先前往赫罗纳大教堂，欣赏这座哥特式建筑的高耸穹顶与精美立面，参观内部的壁画、雕塑与博物馆，感受宗教艺术的精髓；随后前往大教堂附近的犹太区，漫步狭窄的石板街巷，参观犹太区博物馆，了解犹太文化在赫罗纳的传承与发展，感受多元文化的交融。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后登上古城墙，漫步2.3公里的城墙步道，沿途欣赏老城全景、翁达洛河风光与周边的彩色房屋，打卡《权力的游戏》同款取景地；最后前往翁达洛河畔，漫步河畔步道，欣赏河畔的复古建筑与清澈河水，感受古城的静谧与温柔，参观沿途的小型教堂与民俗小店，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、博物馆参观与美食品尝，深入感受古城的多元魅力。参观完翁达洛河畔后，预约古城官方导览（导览费8欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解古城的历史典故、建筑风格演变、犹太文化的兴衰，以及《权力的游戏》取景地的幕后故事。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往赫罗纳考古博物馆，参观馆藏的古罗马时期的陶器、硬币、雕塑，以及中世纪的宗教用品等文物，了解赫罗纳从史前时期到近代的历史发展历程；随后前往老城核心区域的圣菲利克斯教堂，欣赏其融合罗马式与哥特式的建筑风格，感受宗教建筑的庄严静谧；中午前往老城的特色餐厅，品尝加泰罗尼亚传统美食，如加泰罗尼亚炖菜、帕塔塔布拉瓦（炸土豆配蒜香酱料）、卡瓦起泡酒等，搭配当地产的橄榄油面包，体验西班牙东北部的饮食文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  下午，前往老城外围的罗马浴场遗迹，参观古罗马时期的浴场遗址，感受古罗马人的生活场景；随后前往翁达洛河上的罗马桥，欣赏这座古老桥梁的古朴风貌，拍摄河畔与老城的交融美景；傍晚时分，返回古城墙，欣赏夕阳下的老城全景，金色的阳光洒在彩色房屋与古老建筑上，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验古城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入教堂、博物馆等场所需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 老城区街巷狭窄且多石板路，游览时注意脚下安全，建议穿着舒适的步行鞋</li>
                <li>• 参观博物馆、教堂内部时禁止大声喧哗，拍摄文物时禁止使用闪光灯</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往</li>
                <li>• 老城区内无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在老城游客中心预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古城墙瞭望台</h4>
                  <p className="text-sm text-gray-700">拍摄老城全景的最佳机位，站在城墙瞭望台上，可将整个赫罗纳古城的全景尽收眼底，彩色的房屋、蜿蜒的翁达洛河、高耸的大教堂与远处的山峦完美交融，人文景观与自然景观相得益彰。建议选择晴天的上午拍摄，光线柔和，能清晰展现古城的色彩层次与建筑细节，也是《权力的游戏》同款全景打卡点。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 赫罗纳大教堂正面广场</h4>
                  <p className="text-sm text-gray-700">大教堂是古城的标志性建筑，哥特式的高耸立面、精美的雕塑与拱形门廊极具视觉冲击力，这里是拍摄建筑特写的核心机位。建议选择阴天或上午10点左右拍摄，避免强光直射，能清晰展现大教堂的建筑细节与雕塑纹理，也是《权力的游戏》“君临城”城门取景地。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 犹太区石板街巷</h4>
                  <p className="text-sm text-gray-700">犹太区的街巷狭窄曲折，两侧是古朴的石砌房屋与彩色门窗，石板路被岁月磨得光滑，光影交错，自带复古静谧的氛围。这里是拍摄氛围感人文照片的绝佳机位，建议选择午后拍摄，利用阳光在街巷中形成的光影，拍摄漫步的人物或街巷细节。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 翁达洛河畔步道</h4>
                  <p className="text-sm text-gray-700">翁达洛河清澈见底，河畔两侧是彩色的房屋与复古的桥梁，微风拂过，河水潺潺，画面清新自然，兼具温柔与浪漫。这里是拍摄风景与人物剪影的绝佳机位，建议选择清晨或傍晚拍摄，光线柔和，能凸显河畔的温柔与古城的静谧。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 罗马桥中央</h4>
                  <p className="text-sm text-gray-700">罗马桥始建于古罗马时期，桥面由巨大的石块铺成，两侧有古朴的护栏，站在桥中央可拍摄翁达洛河两岸的风光与老城的天际线，古老的桥梁与现代的游客相互映衬，兼具历史感与生活气息。建议选择晴天的下午拍摄，光线充足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城彩色房屋群</h4>
                  <p className="text-sm text-gray-700">赫罗纳老城的彩色房屋是一大特色，集中分布在翁达洛河畔，红、黄、蓝、绿等色彩交织，搭配古朴的石砌墙体，极具视觉美感。这里是拍摄建筑特写与氛围感照片的绝佳机位，建议选择上午拍摄，光线柔和，能清晰展现房屋的色彩层次。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城建筑色彩丰富，建议穿搭素色衣物（如白色、米色、浅灰色），形成鲜明对比</li>
                <li>• 拍摄建筑特写时，可近距离拍摄细节，突出雕刻的工艺之美与色彩的层次感</li>
                <li>• 室内拍摄时，避免使用闪光灯，可调整相机参数，利用自然光线拍摄</li>
                <li>• 尊重当地文化，拍摄教堂、博物馆内部时需保持安静，禁止随意触摸文物与雕塑</li>
                <li>• 拍摄《权力的游戏》取景地时，可搭配相关道具，增强影视氛围感</li>
                <li>• 拍摄人物时，需避免遮挡建筑主体，尊重老城的历史风貌</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">达利剧院博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约40公里，乘坐火车30分钟可达（位于菲格拉斯），是萨尔瓦多·达利亲自设计的博物馆，馆内收藏了达利从14岁到80岁的大量作品，涵盖印象派、未来派、立体派与超现实主义风格，还有达利本人的陵墓。</p>
                <div className="text-xs text-gray-500">🚂 火车30分钟 | 🎨 超现实主义</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">布拉瓦海岸</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约30公里，乘坐巴士40分钟可达，是西班牙东北部著名的海滨度假胜地，拥有清澈的海水、细腻的沙滩与独特的海岸风光，沿途还有多个海滨小镇，如塔拉萨德马尔、卡达克斯等。</p>
                <div className="text-xs text-gray-500">🚌 巴士40分钟 | 🏖️ 海滨度假</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣费柳-德吉克索尔斯</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约20公里，步行或乘坐公交30分钟可达，是一座保存完整的中世纪小镇，拥有古老的城堡、教堂与石板街巷，环境清幽，氛围静谧，可感受小众中世纪小镇的韵味。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行30分钟 | 🏰 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">赫罗纳考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约500米，步行8分钟可达，馆内收藏了赫罗纳地区从史前时期到中世纪的大量文物，包括古罗马时期的陶器、硬币、雕塑，以及中世纪的宗教用品、生活用品等。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">加拉夫城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约1.5公里，步行20分钟可达，始建于10世纪，是一座融合了罗马式与哥特式风格的城堡，城堡位于山顶，登顶可俯瞰整个赫罗纳古城与翁达洛河风光，历史底蕴深厚。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行20分钟 | 🏰 山顶城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">赫罗纳现代艺术博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约800米，步行12分钟可达，馆内收藏了西班牙现代与当代的绘画、雕塑、摄影等作品，展示了西班牙现代艺术的发展历程，建筑风格简约现代。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行12分钟 | 🎨 现代艺术</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离赫罗纳大教堂、犹太区、古城墙等核心景点较近，步行即可抵达，周边环境复古静谧，推窗即可欣赏中世纪建筑与翁达洛河畔风光，还能便捷打卡《权力的游戏》取景地。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往巴塞罗那、马德里等周边城市的游客，周边有餐厅、便利店，生活便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">翁达洛河畔</h4>
                  <p className="text-sm text-yellow-800">距离老城约800米，环境清幽，可欣赏河畔风光，性价比高，适合休闲度假的游客，可享受宁静的住宿环境，同时便于游览老城。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城区内，部分由中世纪建筑改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏老城全景或河畔风光，早餐丰富。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或河畔，步行可达核心景点，房间干净整洁，设施齐全，价格适中，性价比突出，适合大多数游客。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的西班牙生活。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，适合背包客和年轻游客。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10-11月）：</strong>建议提前1-2个月预订，海滨度假旺季和影视打卡旺季</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如大教堂、达利博物馆联票）的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>西班牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城区部分酒店无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城区夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                赫罗纳古城，这座被岁月温柔包裹的千年秘境，历经古罗马的喧嚣、摩尔人的浸润、中世纪的鼎盛，依然保留着最纯粹的历史韵味与多元魅力。它既有古罗马遗迹的古朴厚重，哥特式建筑的高耸挺拔，也有摩尔式建筑的精巧细腻；既有欧洲最完整犹太区的文化印记，也有《权力的游戏》带来的影视活力；既有翁达洛河畔的温柔静谧，也有中世纪街巷的烟火气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步彩色街巷，触摸千年建筑的纹理；可以登上古城墙，俯瞰全城的光影流转；可以走进教堂，领略宗教艺术的精髓；可以坐在河畔，感受微风与岁月的温柔。无论是独自旅行、情侣出游还是家庭度假，赫罗纳古城都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与人文的浸润中，读懂西班牙东北部的独特魅力，爱上这片兼具复古韵味与现代活力的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}