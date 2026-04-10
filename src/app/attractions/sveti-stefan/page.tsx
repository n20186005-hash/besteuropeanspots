import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣斯特凡岛・Sveti Stefan・黑山・布德瓦 | 最佳欧洲景点',
  description: '探索圣斯特凡岛，这座被誉为"亚得里亚海珍珠"的陆连岛，以其蓝白相间的海滨建筑群和独特的人文历史闻名于世。',
}

export default function SvetiStefanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣斯特凡岛', href: '/attractions/sveti-stefan' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣斯特凡岛・Sveti Stefan・黑山・布德瓦</h1>
          <p className="text-lg text-gray-600 mb-6">
            圣斯特凡岛是黑山亚得里亚海岸的一颗璀璨明珠，总面积约0.015平方公里，外形酷似一只静卧在海中的贝壳。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              圣斯特凡岛是黑山亚得里亚海岸的一颗璀璨明珠，总面积约0.015平方公里，外形酷似一只静卧在海中的贝壳。岛上留存着中世纪风格的石砌建筑群，蓝瓦白墙与蔚蓝大海、翠绿植被相映成趣，如今整座岛屿被安缦酒店接管，兼具历史底蕴与高端度假氛围。这里既有古朴的街巷、古老的教堂，也有澄澈的海滩、绝美的海景，是感受黑山海滨风情、探寻历史遗迹与休闲度假的绝佳去处，承载着千年的人文记忆与山海共生的独特魅力。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣斯特凡岛" />
                <InfoRow label="英文名称" value="Sveti Stefan（Saint Stephen Island）" />
                <InfoRow label="国家" value="黑山（Montenegro）" />
                <InfoRow label="城市" value="布德瓦（Budva）" />
                <InfoRow label="所属区域" value="黑山亚得里亚海岸" />
              </div>
              <div className="space-y-4">
                <InfoRow label="岛屿类型" value="陆连岛" />
                <InfoRow label="连接方式" value="约100米长狭长浅滩" />
                <InfoRow label="距离布德瓦" value="约6公里" />
                <InfoRow label="世界遗产" value="1979年列入世界文化遗产" />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">详细门票信息</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">官方导览门票：</span>20欧元/人，12岁以下儿童免费，学生半价（10欧元/人）</p>
                <p><span className="font-medium">导览时间：</span>11:00、14:00各一场，夏季旺季增加16:00场次</p>
                <p><span className="font-medium">替代方案：</span>预订岛上酒店午餐或晚餐，餐后可免费参观</p>
                <p><span className="font-medium">预订建议：</span>夏季旺季建议提前1天预订，避免无票</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">交通指南</h4>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><span className="font-medium">外部交通：</span>蒂瓦特机场→圣斯特凡岛（自驾40分钟，或机场大巴30分钟到布德瓦）</p>
                <p><span className="font-medium">市内交通：</span>布德瓦Rozino车站→岛屿（大巴16分钟，2欧元；打车15分钟，15-20欧元）</p>
                <p><span className="font-medium">岛屿连接：</span>步行通过约100米浅滩，注意潮汐时间</p>
                <p><span className="font-medium">停车场：</span>岛屿入口外专用停车场，收费约5欧元/天</p>
              </div>
            </div>
          </Section>

          <Section title="3. 历史背景">
            <p className="text-gray-700 leading-relaxed mb-4">
              圣斯特凡岛的历史源远流长，从古代海盗据点到渔村，再到如今的高端度假胜地，千年间历经变迁，每一段历史都为这座小岛增添了独特的人文底蕴，见证了黑山海岸的兴衰与发展，也留下了多元文化交融的痕迹。这座小岛凭借得天独厚的地理位置，成为古代地中海地区重要的交通要道与战略据点。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              中世纪时期，圣斯特凡岛就已成为重要的军事防御据点，相传土耳其海军之父巴巴罗萨海雷丁进攻科托尔时，曾将辎重补给船停泊于此，仅率战舰杀入科托尔峡湾。没想到当地海盗趁机洗劫了土耳其的补给船，此后这里便成为海盗的根据地，海盗们不断与土耳其人、威尼斯人等征服者展开斗争，逐渐在岛上建立起坚固的防御工事与居住群落。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              随着海盗势力的衰落，圣斯特凡岛逐渐转型为渔村，1800年左右，岛上已有400多人口、12个家庭居住，村民们以捕鱼、航海为生，在岛上修建了石砌房屋、教堂等建筑，形成了如今我们看到的中世纪街巷格局。这些石屋大多依山而建，错落有致，蓝瓦白墙的风格既适应了海滨气候，又充满了地中海风情，成为小岛最具标志性的景观。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              19世纪至20世纪初，圣斯特凡岛凭借绝美的海景与独特的渔村风貌，逐渐被外界熟知，成为当时欧洲贵族的小众度假地。1950年代，黑山当地政府决定将这座小岛改造成高端度假酒店，岛上所有居民全部迁出，随后对原有建筑进行修缮与改造，保留了中世纪石屋的外观风貌，内部则打造为高端酒店客房、餐厅与休闲设施，圣斯特凡岛从此成为全球知名的高端度假胜地。
            </p>
            <p className="text-gray-700 leading-relaxed">
              此后，无数名人墨客纷纷前往圣斯特凡岛度假，包括约瑟普·布罗兹·铁托、瓦科拉夫·哈维尔、英国玛格丽特公主、索菲亚·罗兰、史泰龙等，他们的到来让这座小岛的名气进一步提升，成为黑山的一张旅游名片。1979年，圣斯特凡岛随布德瓦老城一同被列入世界文化遗产名录，其历史建筑与自然景观得到了严格的保护，既保留了千年人文底蕴，又融入了现代度假理念，实现了历史与现代的完美融合。如今，圣斯特凡岛虽然被安缦酒店接管，但依然向游客开放导览参观，游客可在导游的带领下，探寻岛上的历史遗迹、古老教堂与中世纪街巷，感受小岛的千年变迁；同时，也可在周边海滩休闲度假，欣赏亚得里亚海的澄澈海水，体验山海共生的独特魅力，这里既是历史的见证者，也是休闲度假的理想之地。
            </p>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">经典步行游览路线</h4>
                <p className="text-gray-700 mb-4">全程约2-3小时，节奏舒缓，兼顾打卡与深度体验</p>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">起点：圣斯特凡岛入口</h5>
                    <p>设有世界文化遗产标识与导览集合点，可领取导览手册，预订私人导览（30欧元/人）</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第一站：浅滩步道（步行2分钟）</h5>
                    <p>约100米长狭长浅滩，连接岛屿与陆地的唯一通道，可欣赏澄澈海水与海岛远景</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第二站：岛屿入口广场（步行3分钟）</h5>
                    <p>广场上有小型纪念碑与古老石砌拱门，留存中世纪建筑痕迹，可拍照打卡</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第三站：中世纪街巷（步行5分钟）</h5>
                    <p>核心游览区域，狭窄石板路蜿蜒曲折，两侧蓝瓦白墙石砌房屋，充满地中海风情</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第四站：圣斯特凡教堂（步行3分钟）</h5>
                    <p>岛上最古老建筑之一，始建于15世纪，石砌结构，内部留存古老壁画与雕塑</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第五站：岛屿制高点观景台（步行4分钟）</h5>
                    <p>位于小岛最高处，可俯瞰整个圣斯特凡岛全景，远眺布德瓦海岸风光</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">第六站：酒店观景露台（步行3分钟）</h5>
                    <p>安缦酒店公共观景区域，可休息欣赏海景，感受高端度假氛围</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="font-medium">终点：岛屿出口（步行5分钟）</h5>
                    <p>出口处有纪念品商店，可购买小岛相关纪念品，结束后可前往周边海滩休闲</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">温馨提示</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 岛屿属于世界文化遗产，游览时禁止大声喧哗、随意触摸建筑与文物</li>
                  <li>• 导览过程中需跟随导游，不得擅自离队，部分区域为酒店私人区域</li>
                  <li>• 夏季亚得里亚海岸紫外线极强，需携带遮阳帽、防晒霜与饮用水</li>
                  <li>• 浅滩步道在涨潮时可能被海水淹没，建议提前查看潮汐时间</li>
                  <li>• 尊重当地风俗习惯，拍照时避免拍摄酒店内部隐私区域与工作人员</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">浅滩步道中段</h4>
                  <p className="text-gray-700 text-sm">拍摄小岛全景经典机位，可完整拍摄圣斯特凡岛整体轮廓，蓝瓦白墙建筑群依山而建，酷似静卧海中的贝壳。最佳时间：上午9:00-10:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">岛屿制高点观景台</h4>
                  <p className="text-gray-700 text-sm">拍摄小岛全景最佳机位，可俯瞰整个圣斯特凡岛街巷、建筑与海滩，远眺布德瓦海岸线。最佳时间：傍晚17:00-18:00</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣斯特凡教堂门口</h4>
                  <p className="text-gray-700 text-sm">拍摄复古人文风照片核心机位，教堂古朴石砌外墙、拱形门窗与周边蓝瓦白墙建筑相互映衬，充满中世纪韵味。最佳时间：上午10:30-11:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">半山观景台（GPS：42.258213, 18.896150）</h4>
                  <p className="text-gray-700 text-sm">位于小岛背后山腰处，距离岛屿约2公里，拍摄小岛与亚得里亚海全貌的绝佳视角，画面层次丰富。最佳时间：日出或日落时分</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">圣萨瓦教堂下方观景台</h4>
                  <p className="text-gray-700 text-sm">位于小岛背后山上，视野广阔，是黑山欣赏山海风光的最美观景台之一，画面浪漫壮阔。最佳时间：午后14:00-15:30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">岛屿西侧海滩</h4>
                  <p className="text-gray-700 text-sm">公共海滩，海水澄澈见底，沙滩细腻柔软，可拍摄小岛侧面全景，蓝瓦白墙建筑与蔚蓝海水、洁白沙滩相映成趣。最佳时间：上午8:30-9:30</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">拍照小贴士</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 最佳拍摄时间：清晨（8:30-10:30）和傍晚（17:00-18:00），光线柔和，游客较少</li>
                  <li>• 建议穿着纯色、简约风格衣物，如白色、浅蓝色、米白色，与蓝瓦白墙、蔚蓝大海形成呼应</li>
                  <li>• 拍摄全景时可使用广角镜头，拍摄细节时可使用长焦镜头，突出建筑雕花、窗台绿植</li>
                  <li>• 拍摄海景时可利用水面倒影，增加画面层次感；山区与海边风较大，注意稳定设备</li>
                  <li>• 非安缦住客禁止拍摄酒店内部隐私区域，遵守景区规定</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="6. 实用贴士">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">最佳游览时间</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 5-9月：气候温和，适合海滨活动</li>
                    <li>• 7-8月：旅游旺季，活动丰富但游客较多</li>
                    <li>• 春秋季：人流相对较少，价格更优惠</li>
                    <li>• 清晨傍晚：光线柔和，适合拍照，游客较少</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">参观注意事项</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 岛屿属于高端度假区，需保持安静，避免大声喧哗</li>
                    <li>• 亚得里亚海岸紫外线极强，必须携带遮阳帽、防晒霜</li>
                    <li>• 浅滩步道注意潮汐变化，涨潮时可能无法通行</li>
                    <li>• 尊重当地风俗习惯，避免拍摄私人区域</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">特色体验</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 漫步浅滩步道，感受岛屿与大陆的独特连接方式</li>
                    <li>• 登上岛屿制高点，俯瞰亚得里亚海绝美海景</li>
                    <li>• 参观中世纪教堂，感受千年历史底蕴</li>
                    <li>• 在周边海滩享受地中海阳光与海水</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">实用信息</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 当地货币：欧元，支持信用卡和移动支付</li>
                    <li>• 语言：黑山语，但旅游区英语基本通行</li>
                    <li>• 电压：230V，插头为Type F型</li>
                    <li>• 紧急电话：112（欧洲统一紧急电话）</li>
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