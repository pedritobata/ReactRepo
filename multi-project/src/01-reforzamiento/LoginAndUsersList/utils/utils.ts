
export const getPrevRoute = (fullRoute: string, back: number) => {
    const routesArr = fullRoute.split('/');
    if(routesArr.length > 1) {
        return routesArr.slice(0, -back).join('/');
    }
    return fullRoute;
}