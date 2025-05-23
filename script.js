document.addEventListener('DOMContentLoaded', () => {
            const zodiacData = [
                {
                    chineseName: "白羊座",
                    englishName: "Aries",
                    date: "3/21 - 4/19",
                    image: "♈", // 白羊座 Unicode
                    attribute: "火象星座 (Fire)",
                    personality: "充滿活力、熱情、直接、有領導力、好勝、衝動。喜歡挑戰，是天生的開創者，但也可能因為缺乏耐心而半途而廢。",
                    luckyCharm: "紅寶石、鑽石、鐵",
                    famousPeople: "Lady Gaga, 羅伯特·唐尼, 艾瑪·華森"
                },
                {
                    chineseName: "金牛座",
                    englishName: "Taurus",
                    date: "4/20 - 5/20",
                    image: "♉", // 金牛座 Unicode
                    attribute: "土象星座 (Earth)",
                    personality: "穩重、務實、有耐心、可靠、固執、追求物質享受。重視安全感與舒適，對美有獨特的鑑賞力，但有時過於固執己見。",
                    luckyCharm: "祖母綠、藍寶石、銅",
                    famousPeople: "Adele, 巨石強森, 奧黛麗·赫本"
                },
                {
                    chineseName: "雙子座",
                    englishName: "Gemini",
                    date: "5/21 - 6/21",
                    image: "♊", // 雙子座 Unicode
                    attribute: "風象星座 (Air)",
                    personality: "機智、善變、好奇心強、溝通能力好、三心二意。反應快，喜歡學習新事物，但也容易分心，給人不安定的感覺。",
                    luckyCharm: "瑪瑙、蛋白石、水銀",
                    famousPeople: "安潔莉娜·裘莉, 約翰尼·德普, 瑪麗蓮·夢露"
                },
                {
                    chineseName: "巨蟹座",
                    englishName: "Cancer",
                    date: "6/22 - 7/22",
                    image: "♋", // 巨蟹座 Unicode
                    attribute: "水象星座 (Water)",
                    personality: "溫柔、體貼、情感豐富、念舊、保護欲強、情緒化。家庭觀念重，富有同情心，但容易受情緒影響，缺乏安全感。",
                    luckyCharm: "珍珠、月光石、銀",
                    famousPeople: "Ariana Grande, 湯姆·漢克斯, 黛安娜王妃"
                },
                {
                    chineseName: "獅子座",
                    englishName: "Leo",
                    date: "7/23 - 8/22",
                    image: "♌", // 獅子座 Unicode
                    attribute: "火象星座 (Fire)",
                    personality: "自信、慷慨、有魅力、愛面子、領導慾強、戲劇化。天生的王者，喜歡成為焦點，但也可能顯得有些霸道和自我中心。",
                    luckyCharm: "黃金、琥珀、太陽石",
                    famousPeople: "Jennifer Lopez, 巴拉克·歐巴馬, 麥當娜"
                },
                {
                    chineseName: "處女座",
                    englishName: "Virgo",
                    date: "8/23 - 9/22",
                    image: "♍", // 處女座 Unicode
                    attribute: "土象星座 (Earth)",
                    personality: "完美主義、細心、有條理、謙虛、挑剔、愛乾淨。追求細節和效率，分析能力強，但有時過於吹毛求疵，容易焦慮。",
                    luckyCharm: "藍寶石、翡翠、水銀",
                    famousPeople: "碧昂絲, 基努·李維, 麥可·傑克森"
                },
                {
                    chineseName: "天秤座",
                    englishName: "Libra",
                    date: "9/23 - 10/23",
                    image: "♎", // 天秤座 Unicode
                    attribute: "風象星座 (Air)",
                    personality: "公平、優雅、善於交際、猶豫不決、追求和諧。天生的外交家，重視人際關係的平衡，但也常在選擇中掙扎。",
                    luckyCharm: "蛋白石、鑽石、銅",
                    famousPeople: "Will Smith, 金·卡戴珊, 艾薇兒"
                },
                {
                    chineseName: "天蠍座",
                    englishName: "Scorpio",
                    date: "10/24 - 11/22",
                    image: "♏", // 天蠍座 Unicode
                    attribute: "水象星座 (Water)",
                    personality: "神秘、熱情、佔有慾強、直覺敏銳、愛恨分明。洞察力強，情感深刻，但有時顯得猜忌心重且不易妥協。",
                    luckyCharm: "黃玉、石榴石、鐵",
                    famousPeople: "萊昂納多·迪卡普里奧, 凱蒂·佩芮, 比爾·蓋茲"
                },
                {
                    chineseName: "射手座",
                    englishName: "Sagittarius",
                    date: "11/23 - 12/21",
                    image: "♐", // 射手座 Unicode
                    attribute: "火象星座 (Fire)",
                    personality: "樂觀、自由、愛冒險、坦率、不拘小節。熱愛探索未知，追求真理，但有時過於直接，不夠圓滑。",
                    luckyCharm: "綠松石、紫水晶、錫",
                    famousPeople: "泰勒絲, 布萊德·彼特, 蔡依林"
                },
                {
                    chineseName: "摩羯座",
                    englishName: "Capricorn",
                    date: "12/22 - 1/19",
                    image: "♑", // 摩羯座 Unicode
                    attribute: "土象星座 (Earth)",
                    personality: "務實、有責任感、自律、有野心、嚴肅、保守。目標導向，堅忍不拔，但有時顯得過於嚴謹，缺乏彈性。",
                    luckyCharm: "石榴石、黑曜石、鉛",
                    famousPeople: "LeBron James, 凱特·摩絲, 霍金"
                },
                {
                    chineseName: "水瓶座",
                    englishName: "Aquarius",
                    date: "1/20 - 2/18",
                    image: "♒", // 水瓶座 Unicode
                    attribute: "風象星座 (Air)",
                    personality: "獨立、創新、人道主義、理性、難以捉摸。思想前衛，重視友誼與群體，但有時顯得疏離且不按牌理牌。",
                    luckyCharm: "紫水晶、藍寶石、鈾",
                    famousPeople: "Oprah Winfrey, 賈斯汀·提姆布萊克, 達爾文"
                },
                {
                    chineseName: "雙魚座",
                    englishName: "Pisces",
                    date: "2/19 - 3/20",
                    image: "♓", // 雙魚座 Unicode
                    attribute: "水象星座 (Water)",
                    personality: "浪漫、富有同情心、藝術氣息、愛幻想、不切實際。溫柔善良，具犧牲奉獻精神，但也容易逃避現實，多愁善感。",
                    luckyCharm: "海藍寶石、紫水晶、錫",
                    famousPeople: "Rihanna, 史蒂夫·賈伯斯, 愛因斯坦"
                }
            ];

            const container = document.getElementById('zodiac-container');
            const monthSelect = document.getElementById('month-select');
            const daySelect = document.getElementById('day-select');
            const lookupButton = document.getElementById('lookup-button');
            const lookupResult = document.getElementById('lookup-result');

            if (!container) {
                console.error("無法找到 #zodiac-container 元素。");
                return;
            }

            // Populate month dropdown
            for (let i = 1; i <= 12; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = `${i} 月`;
                monthSelect.appendChild(option);
            }

            // Populate day dropdown (initially for 31 days)
            function populateDays(month) {
                daySelect.innerHTML = ''; // Clear existing options
                // Using 2024 for leap year consideration for February to get correct days
                const daysInMonth = new Date(2024, month, 0).getDate();
                for (let i = 1; i <= daysInMonth; i++) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = `${i} 日`;
                    daySelect.appendChild(option);
                }
            }

            // Initial population of days based on default month (January)
            populateDays(monthSelect.value);

            // Update days when month changes
            monthSelect.addEventListener('change', () => {
                populateDays(monthSelect.value);
            });

            // Function to determine zodiac sign based on month and day
            function getZodiacSignName(month, day) {
                if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
                if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
                if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return "Gemini";
                if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "Cancer";
                if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
                if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
                if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return "Libra";
                if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return "Scorpio";
                if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return "Sagittarius";
                // Capricorn spans across two years, so handle January for Capricorn
                if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
                if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
                if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
                return "Unknown"; // Should not happen with correct date ranges
            }

            // Lookup button click event
            lookupButton.addEventListener('click', () => {
                const selectedMonth = parseInt(monthSelect.value);
                const selectedDay = parseInt(daySelect.value);
                const zodiacEnglishName = getZodiacSignName(selectedMonth, selectedDay);

                // Unflip all cards first to ensure only one is flipped
                document.querySelectorAll('.zodiac-card').forEach(card => {
                    card.classList.remove('flipped');
                });

                const targetCard = document.querySelector(`.zodiac-card[data-english-name="${zodiacEnglishName}"]`);

                if (targetCard) {
                    targetCard.classList.add('flipped');
                    // Scroll to the flipped card for better user experience
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    lookupResult.classList.add('hidden'); // Hide any previous error message
                } else {
                    lookupResult.classList.remove('hidden'); // Show error message for invalid date
                    lookupResult.innerHTML = `<p class="text-red-600">抱歉，無法找到該日期的星座資訊。請確認您選擇的日期。</p>`;
                }
            });

            // Original code to generate zodiac cards
            zodiacData.forEach(sign => {
                // 創建卡片元素
                const card = document.createElement('div');
                // 使用 Tailwind CSS 類別來設定卡片樣式和響應式行為
                card.classList.add('zodiac-card', 'relative', 'rounded-xl', 'cursor-pointer', 'transform', 'hover:scale-105', 'transition-all', 'duration-300', 'ease-in-out', 'focus:outline-none', 'focus:ring-4', 'focus:ring-blue-300');
                card.setAttribute('aria-label', `${sign.chineseName}資訊卡片`); // 輔助功能
                card.setAttribute('data-english-name', sign.englishName); // Add data attribute for easy lookup

                // 卡片正面內容
                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front', 'bg-white', 'text-gray-800', 'flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'rounded-xl', 'shadow-lg');
                // 修改此處以顯示 Unicode 符號而不是圖片
                cardFront.innerHTML = `
                    <div class="zodiac-unicode-symbol text-blue-600" aria-hidden="true">${sign.image}</div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-1">${sign.chineseName}</h2>
                    <p class="english-name text-lg text-gray-600 mb-2">${sign.englishName}</p>
                    <p class="date-range text-base text-gray-500">${sign.date}</p>
                `;

                // 卡片背面內容
                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back', 'bg-blue-50', 'text-gray-700', 'flex', 'flex-col', 'items-start', 'justify-center', 'p-6', 'rounded-xl', 'shadow-lg');
                cardBack.innerHTML = `
                    <h3 class="text-xl font-semibold text-blue-700 mb-3">${sign.chineseName} (${sign.englishName})</h3>
                    <p class="attribute text-base text-gray-600 mb-3"><strong>屬性：</strong>${sign.attribute}</p>
                    <p class="text-sm text-gray-700 leading-relaxed mb-3"><strong>個性特點：</strong><br>${sign.personality}</p>
                    <p class="text-sm text-gray-700 leading-relaxed mb-3"><strong>幸運物：</strong>${sign.luckyCharm}</p>
                    <p class="text-sm text-gray-700 leading-relaxed"><strong>相同星座名人：</strong>${sign.famousPeople}</p>
                `;

                // 將正面和背面添加到卡片
                card.appendChild(cardFront);
                card.appendChild(cardBack);

                // 添加點擊事件監聽器
                card.addEventListener('click', () => {
                    card.classList.toggle('flipped');
                });

                // 添加鍵盤操作支持 (Enter 或 Space)
                card.setAttribute('tabindex', '0'); // 使 div 可聚焦
                card.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        card.classList.toggle('flipped');
                        event.preventDefault(); // 防止空格鍵滾動頁面
                    }
                });

                // 將卡片添加到容器
                container.appendChild(card);
            });
        });