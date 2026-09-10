import menuItems from '@/data/menuItem';
import { ref, computed } from 'vue';

const menu = ref(menuItems);
const catego = ref('');
const diate = ref('');
const port = ref('');
const price = ref(0);

export default function useItem () {

    const filterCategory = computed(() => {
        if (!catego.value) return menuItems; 
        return menu.value.filter((item) => item.category === catego.value);
    });

    const filterDiatery = computed(() => {
        if (!diate.value) return menuItems; 
        return menu.value.filter((x) => x.dietary.includes(diate.value));
    });

    const filterPortion = computed(() => {
        if (!port.value) return menuItems; 
        return menu.value.filter((x) => x.portion_sizes.includes(port.value));
    });

    const filterPrice = computed(() => {
        if (!price.value) return menuItems; 
        return menu.value.filter((x) => Math.round(x.price) === Number(price.value));
    });

    const finalMenu = computed(() => {
        let result = menuItems;

        if (catego.value) {
            const validIds = filterCategory.value.map(item => item.id);
            result = result.filter(item => validIds.includes(item.id));
        }
        if (diate.value) {
            const validIds = filterDiatery.value.map(item => item.id);
            result = result.filter(item => validIds.includes(item.id));
        }
        if (port.value) {
            const validIds = filterPortion.value.map(item => item.id);
            result = result.filter(item => validIds.includes(item.id));
        }
        if (price.value) {
            const validIds = filterPrice.value.map(item => item.id);
            result = result.filter(item => validIds.includes(item.id));
        }

        return result;
    });

    const clearFilter = () => {
        catego.value = '';
        diate.value = '';
        port.value = '';
        price.value = 0;
    };

    return {
        catego,
        diate,
        port,
        price,
        filterCategory,
        filterDiatery,
        filterPortion,
        filterPrice,
        menu: finalMenu,
        clearFilter
    }
}
